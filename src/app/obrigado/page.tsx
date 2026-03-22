import Link from 'next/link';
import { CookieMark } from '@/components/icons/DoodleIcons';
import { siteConfig } from '@/lib/data';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <nav className="h-20 flex items-center justify-center border-b border-sand">
        <Link href="/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-orange/50 rounded-sm">
          <CookieMark size={32} color="var(--ink)" />
          <span className="font-display font-bold text-2xl text-ink mt-1">Massa</span>
        </Link>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CookieMark size={80} color="var(--orange)" />
          </div>
          
          <h1 className="font-display font-bold text-4xl text-ink mb-3">Pedido enviado!</h1>
          <p className="font-body text-ink-muted mb-8 text-lg">
            Recebemos os dados do seu pedido e já vamos te chamar no WhatsApp.
          </p>

          <div className="bg-butter border border-honey rounded-lg p-6 text-left mb-8 shadow-sm">
            <h2 className="font-display font-bold text-xl text-ink mb-4">Próximos passos</h2>
            <ol className="space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="font-bold text-orange mt-0.5">1.</span>
                <span>Vamos responder no WhatsApp com o total final.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange mt-0.5">2.</span>
                <div>
                  <span className="block mb-2">Você realiza o pagamento via Pix:</span>
                  <div className="bg-white border border-sand rounded px-3 py-2 text-xs font-mono text-ink text-center select-all">
                    {siteConfig.pixKey}
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange mt-0.5">3.</span>
                <span>Entregamos no fim de semana no seu apartamento! ✓</span>
              </li>
            </ol>
          </div>

          <a 
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full min-h-[44px] px-6 py-4 bg-[#25D366] text-white font-display font-bold text-lg rounded-pill hover:-translate-y-1 hover:shadow-[4px_4px_0_#2A1408] transition-all mb-6"
          >
            Abrir WhatsApp
          </a>

          <Link href="/" className="inline-flex min-h-[44px] items-center justify-center text-sm text-orange underline hover:text-ink transition-colors font-medium">
            &larr; Voltar para o início
          </Link>
        </div>
      </main>
    </div>
  );
}
