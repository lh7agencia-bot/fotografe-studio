import test from 'node:test';
import assert from 'node:assert/strict';
import { GALLERY_PHOTOS } from '../data/studioData';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  filterGalleryPhotos,
  getNextLightboxIndex,
  hasFormErrors,
  validateContactForm,
} from './studio';

test('validateContactForm rejects empty or invalid inputs', () => {
  const errors = validateContactForm({ name: 'A', email: 'invalid-email', message: 'curta' });
  assert.equal(hasFormErrors(errors), true);
  assert.ok(errors.name);
  assert.ok(errors.email);
  assert.ok(errors.message);
});

test('validateContactForm accepts valid contact payload', () => {
  const errors = validateContactForm({
    name: 'Mariana Almeida',
    email: 'mariana@exemplo.com.br',
    message: 'Gostaria de agendar um ensaio newborn para o próximo mês.',
  });
  assert.equal(hasFormErrors(errors), false);
});

test('buildWhatsAppUrl formats clean digits and encoded message', () => {
  const url = buildWhatsAppUrl('(61) 98530-5443', {
    name: 'Lucas',
    email: 'lucas@exemplo.com',
    message: 'Quero agendar um retrato.',
  });
  assert.ok(url.startsWith('https://wa.me/61985305443?text='));
  assert.ok(url.includes('Lucas'));
  assert.ok(url.includes('Quero%20agendar'));
});

test('buildMailtoUrl encodes subject and body accurately', () => {
  const url = buildMailtoUrl('contato@fotografestudio.com.br', {
    name: 'Camila',
    email: 'camila@exemplo.com',
    message: 'Orçamento para ensaio em família.',
  });
  assert.ok(url.startsWith('mailto:contato@fotografestudio.com.br?subject='));
  assert.ok(url.includes('Camila'));
});

test('filterGalleryPhotos filters by category and preserves all on todas', () => {
  assert.equal(filterGalleryPhotos(GALLERY_PHOTOS, 'todas').length, 3);
  assert.equal(filterGalleryPhotos(GALLERY_PHOTOS, 'ensaios').length, 1);
  assert.equal(filterGalleryPhotos(GALLERY_PHOTOS, 'estudio').length, 2);
});

test('getNextLightboxIndex wraps forward and backward cleanly', () => {
  assert.equal(getNextLightboxIndex(0, 3, 'next'), 1);
  assert.equal(getNextLightboxIndex(2, 3, 'next'), 0);
  assert.equal(getNextLightboxIndex(0, 3, 'prev'), 2);
  assert.equal(getNextLightboxIndex(1, 3, 'prev'), 0);
});
