import cv2
import numpy as np
import os
from PIL import Image, ImageDraw, ImageFont

SOURCE = 'image.jpg.jpg'
OUT = 'public/assets'
os.makedirs(OUT, exist_ok=True)

if not os.path.exists(SOURCE):
    print(f"Source image '{SOURCE}' not found.")
    exit(0)

img = cv2.imread(SOURCE)
h, w = img.shape[:2]

scale = 0.5
small = cv2.resize(img, (int(w * scale), int(h * scale)), interpolation=cv2.INTER_AREA)
sh, sw = small.shape[:2]

mask = np.zeros((sh, sw), np.uint8)
bgdModel = np.zeros((1, 65), np.float64)
fgdModel = np.zeros((1, 65), np.float64)

rect = (int(sw * 0.05), int(sh * 0.05), int(sw * 0.9), int(sh * 0.95))
cv2.grabCut(small, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

# Mark margins as background
mask[0:int(sh*0.04), :] = cv2.GC_BGD
mask[:, 0:int(sw*0.04)] = cv2.GC_BGD
mask[:, int(sw*0.96):] = cv2.GC_BGD

# Face center
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, 1.1, 4)
if len(faces) > 0:
    fx, fy, fw, fh = [int(v * scale) for v in faces[0]]
    mask[fy + fh//4 : fy + 3*fh//4, fx + fw//4 : fx + 3*fw//4] = cv2.GC_FGD

cv2.grabCut(small, mask, rect, bgdModel, fgdModel, 3, cv2.GC_INIT_WITH_MASK)

alpha = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)
alpha_full = cv2.resize(alpha, (w, h), interpolation=cv2.INTER_LINEAR)
alpha_blur = cv2.GaussianBlur(alpha_full, (7, 7), 0)

rgba = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
rgba[:, :, 3] = alpha_blur

# Frame crop
crop_y1 = 70
crop_y2 = 1175
crop_h = crop_y2 - crop_y1
crop_w = int(crop_h * (720.0 / 677.0))
crop_x1 = max(0, 757 - crop_w // 2)
crop_x2 = min(w, crop_x1 + crop_w)

cropped = rgba[crop_y1:crop_y2, crop_x1:crop_x2]

for target_w in [1100, 720, 420]:
    target_h = int(target_w * (677.0 / 720.0))
    resized = cv2.resize(cropped, (target_w, target_h), interpolation=cv2.INTER_AREA)
    cv2.imwrite(f'{OUT}/portrait-{target_w}.webp', resized, [cv2.IMWRITE_WEBP_QUALITY, 90])
    print(f'Wrote portrait-{target_w}.webp ({target_w}x{target_h})')

# Social OG image
bg = Image.new('RGB', (1200, 630), color='#07070a')
glow = Image.new('RGBA', (1200, 630), (0,0,0,0))
draw_glow = ImageDraw.Draw(glow)
for r in range(400, 0, -5):
    a = int(90 * (1 - r/400))
    draw_glow.ellipse([936 - r, 280 - r, 936 + r, 280 + r], fill=(229, 19, 43, a))
bg.paste(Image.alpha_composite(Image.new('RGBA', (1200, 630), (7,7,10,255)), glow).convert('RGB'), (0,0))

portrait = Image.open(f'{OUT}/portrait-720.webp')
pw, ph = portrait.size
new_ph = 580
new_pw = int(pw * (new_ph / ph))
portrait_resized = portrait.resize((new_pw, new_ph), Image.Resampling.LANCZOS)
bg.paste(portrait_resized, (1200 - new_pw - 20, 630 - new_ph), portrait_resized)

draw = ImageDraw.Draw(bg)
try:
    font_large = ImageFont.truetype('impact.ttf', 120)
    font_sub = ImageFont.truetype('arialbd.ttf', 26)
    font_tag = ImageFont.truetype('arialbd.ttf', 18)
except:
    font_large = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_tag = ImageFont.load_default()

draw.text((72, 170), 'RAHUL', font=font_large, fill='#f4f1ec')
draw.text((78, 305), 'THE SERIES', font=font_sub, fill='#ff3d5a')
draw.text((78, 360), 'AI/ML ENGINEER • GENERATIVE AI • AGENTIC AI', font=font_tag, fill='#a7a6ad')
draw.text((78, 410), 'Python • LangGraph • RAG • PyTorch • FastAPI', font=font_tag, fill='#6d6c75')

bg.save(f'{OUT}/og-image.jpg', quality=90)
print('Wrote og-image.jpg (1200x630)')
