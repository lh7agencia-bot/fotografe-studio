import type { GalleryCategory, StudioPhoto } from '../data/studioData';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Informe seu nome completo (mínimo de 2 caracteres).';
  }

  if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Informe um endereço de e-mail válido.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Escreva sua mensagem com pelo menos 10 caracteres.';
  }

  return errors;
}

export function hasFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildWhatsAppUrl(
  whatsappDigits: string,
  values?: Partial<ContactFormValues>
): string {
  const cleanDigits = whatsappDigits.replace(/\D/g, '');
  if (!values || (!values.name?.trim() && !values.message?.trim())) {
    const defaultText = encodeURIComponent(
      'Olá! Gostaria de saber mais informações sobre os ensaios do Fotografe Studio.'
    );
    return `https://wa.me/${cleanDigits}?text=${defaultText}`;
  }

  const lines = [
    'Olá, Fotografe Studio! Gostaria de solicitar um atendimento:',
    `Nome: ${values.name?.trim() ?? ''}`,
    `E-mail: ${values.email?.trim() ?? ''}`,
    `Mensagem: ${values.message?.trim() ?? ''}`,
  ];
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function buildMailtoUrl(
  recipientEmail: string,
  values: ContactFormValues
): string {
  const subject = encodeURIComponent(`Contato via site — ${values.name.trim()}`);
  const body = encodeURIComponent(
    `Nome: ${values.name.trim()}\nE-mail: ${values.email.trim()}\n\nMensagem:\n${values.message.trim()}`
  );
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

export function filterGalleryPhotos(
  photos: StudioPhoto[],
  category: GalleryCategory
): StudioPhoto[] {
  if (category === 'todas') {
    return photos;
  }
  return photos.filter((photo) => photo.category === category);
}

export function getNextLightboxIndex(
  currentIndex: number,
  total: number,
  direction: 'next' | 'prev'
): number {
  if (total <= 0) {
    return 0;
  }
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}
