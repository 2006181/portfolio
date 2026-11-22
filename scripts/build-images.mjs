// Builds optimized portrait assets and social image from image.jpg.jpg
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

console.log('Building responsive portrait assets...');
try {
  execSync('python scripts/process-images.py', { stdio: 'inherit' });
  console.log('Images built successfully.');
} catch (err) {
  console.error('Image build error:', err);
}
