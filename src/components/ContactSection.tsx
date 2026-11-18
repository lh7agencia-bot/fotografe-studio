import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { GALLERY_PHOTOS, STUDIO_INFO } from '../data/studioData';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  hasFormErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../utils/studio';
import { StudioImage } from './StudioImage';

type DeliveryChannel = 'whatsapp' | 'email';

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedChannel, setSubmittedChannel] = useState<DeliveryChannel | null>(null);
  const [submittedValues, setSubmittedValues] = useState<ContactFormValues | null>(null);

  const locationPhoto = GALLERY_PHOTOS[2];

  const handleSubmit = (channel: DeliveryChannel, event?: FormEvent) => {
    if (event) {
      event.preventDefault();
    }

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (hasFormErrors(validationErrors)) {
      setSubmittedChannel(null);
      return;
    }

    setSubmittedValues({ ...values });
    setSubmittedChannel(channel);
  };

  const handleReset = () => {
    setValues({ name: '', email: '', message: '' });
    setErrors({});
    setSubmittedChannel(null);
    setSubmittedValues(null);
  };

  const whatsappDirectUrl = submittedValues
    ? buildWhatsAppUrl(STUDIO_INFO.whatsappDigits, submittedValues)
    : buildWhatsAppUrl(STUDIO_INFO.whatsappDigits, values);

  const mailtoDirectUrl = submittedValues
    ? buildMailtoUrl(STUDIO_INFO.email, submittedValues)
    : buildMailtoUrl(STUDIO_INFO.email, values);

  return (
    <section id="contato" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#0D7AC4]">Contato &amp; Localização</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
            Reserve seu horário no Fotografe Studio
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Preencha o formulário para preparar sua mensagem e enviar diretamente pelo WhatsApp ou
            por e-mail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-[#F5F5F5] p-6">
              <h3 className="text-base font-semibold text-slate-900">Informações do Estúdio</h3>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1D9BF0]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-slate-900">Endereço</dt>
                    <dd className="mt-0.5 leading-relaxed text-slate-600">
                      {STUDIO_INFO.address}
                    </dd>
                    <dd className="mt-1 text-xs font-medium text-[#0D7AC4]">
                      {STUDIO_INFO.landmark}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#1D9BF0]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-slate-900">Telefone / WhatsApp</dt>
                    <dd className="mt-0.5 tabular-nums text-slate-700">
                      <a
                        href={buildWhatsAppUrl(STUDIO_INFO.whatsappDigits)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-900 underline-offset-4 hover:text-[#0D7AC4] hover:underline"
                      >
                        {STUDIO_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={STUDIO_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-[#1D9BF0] hover:text-[#0D7AC4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  Abrir endereço no Google Maps
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F5F5F5] p-3">
              <div className="mx-auto max-w-[260px]">
                <StudioImage
                  src={locationPhoto.src}
                  alt={locationPhoto.alt}
                  width={locationPhoto.width}
                  height={locationPhoto.height}
                  className="rounded-xl"
                />
              </div>
              <p className="mt-3 text-center text-xs text-slate-600">
                Comunicado oficial · {STUDIO_INFO.landmark}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F5F5F5]/50 p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-lg font-semibold text-slate-900">Envie sua mensagem</h3>
            <p className="mt-1 text-sm text-slate-600">
              Informe seu nome, e-mail e o tipo de ensaio que você deseja realizar.
            </p>

            {submittedChannel && submittedValues ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 rounded-xl border border-[#1D9BF0]/40 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#0D7AC4]"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">
                      Mensagem pronta para envio
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Obrigado, <strong className="text-slate-900">{submittedValues.name}</strong>.
                      Clique no botão abaixo para concluir o atendimento pelo canal escolhido.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {submittedChannel === 'whatsapp' ? (
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#1D9BF0] px-5 py-2.5 text-sm font-semibold text-[#062134] hover:bg-[#1488D8]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Abrir conversa no WhatsApp</span>
                    </a>
                  ) : (
                    <a
                      href={mailtoDirectUrl}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#1D9BF0] px-5 py-2.5 text-sm font-semibold text-[#062134] hover:bg-[#1488D8]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Abrir aplicativo de E-mail</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={(event) => handleSubmit('whatsapp', event)}
                className="mt-6 space-y-5"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900">
                    Nome completo
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    placeholder="Seu nome"
                    className="mt-1.5 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1D9BF0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1D9BF0]"
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    placeholder="voce@exemplo.com"
                    className="mt-1.5 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1D9BF0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1D9BF0]"
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, message: event.target.value }))
                    }
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    placeholder="Conte qual ensaio você procura e a data de preferência..."
                    className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1D9BF0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1D9BF0]"
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#1D9BF0] px-5 py-2.5 text-sm font-semibold text-[#062134] transition-colors hover:bg-[#1488D8] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Enviar via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSubmit('email')}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-[#1D9BF0] hover:text-[#0D7AC4] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Enviar por E-mail</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
