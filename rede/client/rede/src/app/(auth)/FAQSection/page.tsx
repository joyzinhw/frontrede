import React from 'react';

const faqPanelStyle = {
    backgroundColor: 'transparent',
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

function FAS() {
  return (
    <section className="container" aria-label="caixa de perguntas">
      <header className="faq_header">
        <h2 className="faq_header-title">Perguntas Frequentes</h2>
      </header>

      <div className="faq_body">
        <details aria-expanded={true} className="faq_panel" open>
          <summary className="faq_label">Cadastro</summary>

          <div className="faq_panel-body">
            <p className="faq_panel-answer">
              O cadastro correto é parte fundamental para que você consiga acessar sua conta, por isso, certifique-se de não
              ter deixado nada errado antes de confirmar o cadastro.
            </p>
          </div>
        </details>
      </div>

      <div className="faq_body">
        <details aria-expanded={true} className="faq_panel" open>
          <summary className="faq_label">Privacidade</summary>

          <div className="faq_panel-body">
            <p className="faq_panel-answer">
              Seguindo a política de privacidade e termos de uso, a segurança dos seus dados alocadas neste sistema de
              altíssima responsabilidade e qualidade, podemos assegurar que não serão usados em outros fins além dos
              propostos aqui.
            </p>
          </div>
        </details>
      </div>

      <div className="faq_body">
        <details aria-expanded={true} className="faq_panel" open>
          <summary className="faq_label">Esqueceu a senha</summary>

          <div className="faq_panel-body">
            <p className="faq_panel-answer">Se por acaso acontecer de você esquecer ou perder a senha, solicite outra por meio da tela inicial.</p>
          </div>
        </details>
      </div>
    </section>
  );
}

export default FAS;

