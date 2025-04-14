import { v4 as uuidv4 } from "uuid"

// Função auxiliar para criar IDs únicos para componentes
const createComponentId = () => `component-${uuidv4()}`

// Logo placeholder since the Cloudinary URL is not working
const logoPlaceholder = "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742121751/syu73ezikwcpiwzhtzoa.png"

// Templates padrão
export const defaultTemplates = [

  
  {
    id: "welcome-email",
    name: "Email de Boas-vindas",
    subject: "Bem-vindo à nossa plataforma!",
    thumbnail:
      "https://images.pexels.com/photos/4100717/pexels-photo-4100717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Um email amigável para dar as boas-vindas aos novos usuários.",
    template: {
      name: "Email de Boas-vindas",
      subject: "Bem-vindo à nossa plataforma!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 50,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Bem-vindo à nossa plataforma!</h1>',
          styles: {
            color: "#333333",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Image",
          content:
            "https://images.pexels.com/photos/4100717/pexels-photo-4100717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá,</p><p>Estamos muito felizes em tê-lo conosco! Sua conta foi criada com sucesso e você já pode começar a explorar todos os recursos que oferecemos.</p><p>Aqui estão alguns links úteis para você começar:</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Acessar Minha Conta",
          url: "#",
          styles: {
            backgroundColor: "#4CAF50",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Se você tiver alguma dúvida, não hesite em entrar em contato com nossa equipe de suporte.</p><p>Atenciosamente,<br>Equipe de Suporte</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#f5f5f5",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "newsletter",
    name: "Newsletter Mensal",
    subject: "Novidades do mês de Março",
    thumbnail:
      "https://images.pexels.com/photos/4238488/pexels-photo-4238488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Template para envio de newsletters mensais com múltiplas seções.",
    template: {
      name: "Newsletter Mensal",
      subject: "Novidades do mês de Março",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Newsletter - Março 2023</h1>',
          styles: {
            color: "#333333",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "divider",
          label: "Divider",
          styles: {
            color: "#e0e0e0",
            width: "100%",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<h2>Destaques do Mês</h2>",
          styles: {
            color: "#333333",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "blog-post",
          label: "Blog Post",
          title: "Lançamento do Novo Produto",
          image:
            "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content:
            "<p>Estamos animados em anunciar o lançamento do nosso mais recente produto. Após meses de desenvolvimento, finalmente está pronto para o mercado.</p>",
          url: "#",
          buttonText: "Leia Mais",
          styles: {
            backgroundColor: "#ffffff",
            titleColor: "#333333",
            textColor: "#666666",
            buttonColor: "#4CAF50",
            buttonTextColor: "#ffffff",
            borderRadius: 8,
            padding: 20,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<h2>Artigos Populares</h2>",
          styles: {
            color: "#333333",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "image-grid",
          label: "Image Grid",
          columns: 2,
          images: [
            {
              src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Artigo 1",
              url: "#",
              caption: "Dicas para aumentar a produtividade",
            },
            {
              src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Artigo 2",
              url: "#",
              caption: "Como melhorar seu marketing digital",
            },
          ],
          styles: {
            spacing: 10,
            borderRadius: 8,
            showCaptions: true,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Não perca nossas próximas atualizações. Siga-nos nas redes sociais para ficar por dentro de todas as novidades.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Cancelar Inscrição",
          url: "#",
          styles: {
            backgroundColor: "#f5f5f5",
            color: "#666666",
            borderRadius: 4,
            padding: "8px 16px",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "promotional",
    name: "Email Promocional",
    subject: "Oferta especial: 30% de desconto!",
    thumbnail:
      "https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Template para campanhas promocionais com destaque para produtos.",
    template: {
      name: "Email Promocional",
      subject: "Oferta especial: 30% de desconto!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 0,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 32px;">OFERTA ESPECIAL</h1>',
          styles: {
            color: "#e63946",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Subheading",
          content: '<h2 style="font-size: 24px;">30% DE DESCONTO EM TODOS OS PRODUTOS</h2>',
          styles: {
            color: "#333333",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<p>Aproveite esta oferta por tempo limitado. Válida até o final da semana!</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "product-grid",
          label: "Product Grid",
          columns: 2,
          items: [
            {
              image:
                "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 1",
              price: "R$99,90",
              description: "De R$149,90 por apenas R$99,90",
              url: "#",
            },
            {
              image:
                "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 2",
              price: "R$79,90",
              description: "De R$119,90 por apenas R$79,90",
              url: "#",
            },
            {
              image:
                "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 3",
              price: "R$129,90",
              description: "De R$189,90 por apenas R$129,90",
              url: "#",
            },
            {
              image:
                "https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 4",
              price: "R$149,90",
              description: "De R$219,90 por apenas R$149,90",
              url: "#",
            },
          ],
          styles: {
            backgroundColor: "#ffffff",
            borderColor: "#e0e0e0",
            spacing: 10,
            textAlign: "center",
            borderRadius: 4,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "COMPRAR AGORA",
          url: "#",
          styles: {
            backgroundColor: "#e63946",
            color: "#ffffff",
            borderRadius: 4,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            '<p style="font-size: 12px;">*Oferta válida até 31/03/2023 ou enquanto durarem os estoques. Não cumulativa com outras promoções.</p>',
          styles: {
            color: "#999999",
            fontSize: 12,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#f8f9fa",
        width: 600,
        padding: 20,
      },
    },
  },
  {
    id: "event-invitation",
    name: "Convite para Evento",
    subject: "Você está convidado para nosso evento!",
    thumbnail:
      "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Template para convites de eventos e webinars.",
    template: {
      name: "Convite para Evento",
      subject: "Você está convidado para nosso evento!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">VOCÊ ESTÁ CONVIDADO</h1>',
          styles: {
            color: "#333333",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Subheading",
          content: '<h2 style="font-size: 22px;">Webinar: Tendências de Marketing para 2023</h2>',
          styles: {
            color: "#666666",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Junte-se a nós para um webinar exclusivo sobre as principais tendências de marketing digital para 2023. Nossos especialistas compartilharão insights valiosos e estratégias práticas.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Details",
          content:
            "<p><strong>Data:</strong> 15 de Abril de 2023<br><strong>Horário:</strong> 19:00 - 20:30<br><strong>Local:</strong> Online (Zoom)</p>",
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "INSCREVA-SE AGORA",
          url: "#",
          styles: {
            backgroundColor: "#4CAF50",
            color: "#ffffff",
            borderRadius: 4,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<p>Vagas limitadas. Garanta já a sua!</p>",
          styles: {
            color: "#666666",
            fontSize: 14,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#f5f5f5",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "thank-you",
    name: "Agradecimento pela Compra",
    subject: "Obrigado pela sua compra!",
    thumbnail:
      "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email de agradecimento após uma compra com detalhes do pedido.",
    template: {
      name: "Agradecimento pela Compra",
      subject: "Obrigado pela sua compra!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Obrigado pela sua compra!</h1>',
          styles: {
            color: "#333333",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Cliente],</p><p>Agradecemos por escolher nossa loja. Seu pedido foi recebido e está sendo processado.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Order Details",
          content: '<h2 style="font-size: 20px;">Detalhes do Pedido</h2>',
          styles: {
            color: "#333333",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Order Info",
          content:
            "<p><strong>Número do Pedido:</strong> #12345<br><strong>Data:</strong> 10/03/2023<br><strong>Método de Pagamento:</strong> Cartão de Crédito</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "divider",
          label: "Divider",
          styles: {
            color: "#e0e0e0",
            width: "100%",
          },
        },
        {
          id: createComponentId(),
          type: "product-grid",
          label: "Product Grid",
          columns: 1,
          items: [
            {
              image:
                "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 1",
              price: "R$99,90",
              description: "Quantidade: 1",
              url: "#",
            },
            {
              image:
                "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 2",
              price: "R$149,90",
              description: "Quantidade: 2",
              url: "#",
            },
          ],
          styles: {
            backgroundColor: "#ffffff",
            borderColor: "#e0e0e0",
            spacing: 10,
            textAlign: "left",
            borderRadius: 4,
          },
        },
        {
          id: createComponentId(),
          type: "divider",
          label: "Divider",
          styles: {
            color: "#e0e0e0",
            width: "100%",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Total",
          content:
            "<p><strong>Subtotal:</strong> R$399,70<br><strong>Frete:</strong> R$15,00<br><strong>Total:</strong> R$414,70</p>",
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "right",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Acompanhar Pedido",
          url: "#",
          styles: {
            backgroundColor: "#4CAF50",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Se você tiver alguma dúvida sobre seu pedido, entre em contato com nossa equipe de suporte.</p><p>Atenciosamente,<br>Equipe de Atendimento</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "password-reset",
    name: "Redefinição de Senha",
    subject: "Instruções para redefinir sua senha",
    thumbnail:
      "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para redefinição de senha com link seguro.",
    template: {
      name: "Redefinição de Senha",
      subject: "Instruções para redefinir sua senha",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 24px;">Redefinição de Senha</h1>',
          styles: {
            color: "#333333",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá,</p><p>Recebemos uma solicitação para redefinir a senha da sua conta. Clique no botão abaixo para criar uma nova senha:</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Redefinir Minha Senha",
          url: "#",
          styles: {
            backgroundColor: "#007bff",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Se você não solicitou a redefinição de senha, ignore este email ou entre em contato com nosso suporte se tiver alguma dúvida.</p><p>Este link expirará em 24 horas por motivos de segurança.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            '<p>Se o botão não funcionar, copie e cole o link abaixo no seu navegador:</p><p style="word-break: break-all; font-size: 12px;">https://example.com/reset-password?token=abcdef123456789</p>',
          styles: {
            color: "#666666",
            fontSize: 14,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#f8f9fa",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "abandoned-cart",
    name: "Carrinho Abandonado",
    subject: "Você esqueceu algo no seu carrinho!",
    thumbnail:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para recuperação de carrinhos abandonados.",
    template: {
      name: "Carrinho Abandonado",
      subject: "Você esqueceu algo no seu carrinho!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Você esqueceu algo...</h1>',
          styles: {
            color: "#333333",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Image",
          content:
            "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 80,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá,</p><p>Notamos que você deixou alguns itens no seu carrinho de compras. Não se preocupe, nós os guardamos para você!</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Subheading",
          content: '<h2 style="font-size: 20px;">Seu Carrinho</h2>',
          styles: {
            color: "#333333",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "product-grid",
          label: "Product Grid",
          columns: 1,
          items: [
            {
              image:
                "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 1",
              price: "R$99,90",
              description: "Tamanho: M | Cor: Azul",
              url: "#",
            },
            {
              image:
                "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Produto 2",
              price: "R$149,90",
              description: "Quantidade: 1",
              url: "#",
            },
          ],
          styles: {
            backgroundColor: "#ffffff",
            borderColor: "#e0e0e0",
            spacing: 10,
            textAlign: "left",
            borderRadius: 4,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Finalizar Compra",
          url: "#",
          styles: {
            backgroundColor: "#e63946",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Não perca a oportunidade de garantir estes produtos. Seu carrinho será salvo por mais 48 horas.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#f8f9fa",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "feedback-request",
    name: "Solicitação de Feedback",
    subject: "Sua opinião é importante para nós",
    thumbnail:
      "https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para solicitar feedback dos clientes após uma compra ou serviço.",
    template: {
      name: "Solicitação de Feedback",
      subject: "Sua opinião é importante para nós",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 24px;">Como foi sua experiência?</h1>',
          styles: {
            color: "#333333",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Cliente],</p><p>Esperamos que esteja aproveitando sua recente compra. Gostaríamos muito de saber sua opinião sobre o produto e sua experiência de compra conosco.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Image",
          content:
            "https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 50,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Sua opinião nos ajuda a melhorar nossos produtos e serviços. Leva apenas alguns minutos para responder à nossa pesquisa de satisfação.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Dar Feedback",
          url: "#",
          styles: {
            backgroundColor: "#4CAF50",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Como agradecimento, oferecemos um cupom de 10% de desconto para sua próxima compra: <strong>FEEDBACK10</strong></p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#f5f5f5",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "product-launch",
    name: "Lançamento de Produto",
    subject: "Novo produto acabou de chegar!",
    thumbnail:
      "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para anunciar o lançamento de um novo produto.",
    template: {
      name: "Lançamento de Produto",
      subject: "Novo produto acabou de chegar!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 0,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 32px;">NOVO LANÇAMENTO</h1>',
          styles: {
            color: "#333333",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Subheading",
          content: '<h2 style="font-size: 24px;">Conheça o Produto XYZ</h2>',
          styles: {
            color: "#666666",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Estamos entusiasmados em apresentar nosso mais recente produto, desenvolvido com a mais alta tecnologia e design inovador para proporcionar a melhor experiência.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "image-grid",
          label: "Image Grid",
          columns: 3,
          images: [
            {
              src: "https://images.pexels.com/photos/5650021/pexels-photo-5650021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Característica 1",
              caption: "Design Elegante",
            },
            {
              src: "https://images.pexels.com/photos/5650024/pexels-photo-5650024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Característica 2",
              caption: "Alta Performance",
            },
            {
              src: "https://images.pexels.com/photos/5650029/pexels-photo-5650029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Característica 3",
              caption: "Durabilidade",
            },
          ],
          styles: {
            spacing: 10,
            borderRadius: 8,
            showCaptions: true,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Price",
          content: '<h2 style="font-size: 28px;">R$299,90</h2><p>Oferta de lançamento por tempo limitado</p>',
          styles: {
            color: "#e63946",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "COMPRAR AGORA",
          url: "#",
          styles: {
            backgroundColor: "#e63946",
            color: "#ffffff",
            borderRadius: 4,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<p>Frete grátis para todo o Brasil nas compras acima de R$199.</p>",
          styles: {
            color: "#666666",
            fontSize: 14,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 20,
      },
    },
  },
  {
    id: "holiday-greetings",
    name: "Cartão de Festas",
    subject: "Feliz Natal e Próspero Ano Novo!",
    thumbnail:
      "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para enviar votos de boas festas aos clientes.",
    template: {
      name: "Cartão de Festas",
      subject: "Feliz Natal e Próspero Ano Novo!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 30,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 32px;">Feliz Natal e Próspero Ano Novo!</h1>',
          styles: {
            color: "#2a9d8f",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Querido cliente,</p><p>Nesta época especial do ano, gostaríamos de expressar nossa sincera gratidão por sua confiança e parceria ao longo de 2023.</p><p>Desejamos a você e sua família um Feliz Natal e um Ano Novo repleto de saúde, felicidade e sucesso.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<p>Como forma de agradecimento, preparamos um presente especial para você:</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Coupon",
          content:
            '<h2 style="font-size: 24px;">CUPOM: FESTAS2023</h2><p>20% de desconto em toda a loja</p><p>Válido até 15/01/2024</p>',
          styles: {
            color: "#2a9d8f",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Aproveitar Oferta",
          url: "#",
          styles: {
            backgroundColor: "#2a9d8f",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<p>Atenciosamente,<br>Equipe [Nome da Empresa]</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#f8f9fa",
        width: 600,
        padding: 30,
      },
    },
  },
  // Novos templates criativos
  {
    id: "birthday-celebration",
    name: "Aniversário do Cliente",
    subject: "Feliz Aniversário! Um presente especial para você",
    thumbnail:
      "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para celebrar o aniversário dos clientes com ofertas especiais.",
    template: {
      name: "Aniversário do Cliente",
      subject: "Feliz Aniversário! Um presente especial para você",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 32px;">🎉 Feliz Aniversário! 🎂</h1>',
          styles: {
            color: "#9d4edd",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Cliente],</p><p>Hoje é um dia especial - é o seu aniversário! Queremos celebrar esta data com você e torná-la ainda mais memorável.</p><p>Como um dos nossos clientes mais valiosos, preparamos uma surpresa especial para você:</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Coupon",
          content:
            '<h2 style="font-size: 28px;">CUPOM: ANIVERSARIO2023</h2><p>30% de desconto em qualquer produto</p><p>Válido por 7 dias</p>',
          styles: {
            color: "#9d4edd",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#f8edeb",
            padding: "20px",
            borderRadius: "8px",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Resgatar Meu Presente",
          url: "#",
          styles: {
            backgroundColor: "#9d4edd",
            color: "#ffffff",
            borderRadius: 30,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Esperamos que tenha um dia maravilhoso cheio de alegria e celebrações!</p><p>Com os melhores votos,<br>Equipe [Nome da Empresa]</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "webinar-registration",
    name: "Confirmação de Inscrição em Webinar",
    subject: "Sua inscrição foi confirmada! Detalhes do webinar",
    thumbnail:
      "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email de confirmação para participantes de webinars com detalhes do evento.",
    template: {
      name: "Confirmação de Inscrição em Webinar",
      subject: "Sua inscrição foi confirmada! Detalhes do webinar",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Sua inscrição foi confirmada!</h1>',
          styles: {
            color: "#0077b6",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            '<p>Olá [Nome do Participante],</p><p>Obrigado por se inscrever no nosso webinar <strong>"Estratégias Avançadas de Marketing Digital para 2023"</strong>. Estamos ansiosos para compartilhar conhecimentos valiosos com você!</p>',
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Details",
          content:
            '<div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px;"><h3 style="margin-top: 0;">Detalhes do Webinar:</h3><p><strong>Data:</strong> 25 de Abril de 2023<br><strong>Horário:</strong> 19:00 - 20:30 (Horário de Brasília)<br><strong>Plataforma:</strong> Zoom<br><strong>Link de acesso:</strong> [Será enviado 1 hora antes do evento]</p></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<h3>O que você aprenderá:</h3>",
          styles: {
            color: "#0077b6",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<ul><li>As últimas tendências em marketing digital</li><li>Estratégias eficazes para aumentar o engajamento</li><li>Como otimizar suas campanhas para melhor ROI</li><li>Ferramentas essenciais para automação de marketing</li></ul>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Adicionar ao Calendário",
          url: "#",
          styles: {
            backgroundColor: "#0077b6",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Se você tiver alguma dúvida antes do evento, responda a este email ou entre em contato conosco pelo telefone (XX) XXXX-XXXX.</p><p>Estamos ansiosos para vê-lo no webinar!</p><p>Atenciosamente,<br>[Nome do Apresentador]<br>Especialista em Marketing Digital</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "performance-report",
    name: "Relatório de Desempenho",
    subject: "Seu relatório mensal de desempenho está disponível",
    thumbnail:
      "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email com relatório de desempenho e métricas para clientes.",
    template: {
      name: "Relatório de Desempenho",
      subject: "Seu relatório mensal de desempenho está disponível",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Relatório de Desempenho - Março 2023</h1>',
          styles: {
            color: "#2b2d42",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Cliente],</p><p>Seu relatório mensal de desempenho está disponível. Abaixo você encontrará um resumo das principais métricas e resultados obtidos durante o mês de Março.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Chart",
          content:
            "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Metrics",
          content:
            '<div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;"><h3 style="margin-top: 0; color: #2b2d42;">Principais Métricas:</h3><ul><li><strong>Tráfego Total:</strong> 12.458 visitantes (+18% em relação ao mês anterior)</li><li><strong>Taxa de Conversão:</strong> 3.2% (+0.5% em relação ao mês anterior)</li><li><strong>Tempo Médio no Site:</strong> 3:45 minutos</li><li><strong>Novas Leads:</strong> 245 (+12% em relação ao mês anterior)</li></ul></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content: "<h3>Análise de Desempenho</h3>",
          styles: {
            color: "#2b2d42",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Seu desempenho este mês mostrou uma melhoria significativa em várias áreas-chave. O aumento no tráfego e na taxa de conversão indica que as estratégias implementadas estão gerando resultados positivos.</p><p>Recomendamos focar nos seguintes pontos para o próximo mês:</p><ul><li>Otimizar as páginas com maior taxa de rejeição</li><li>Aumentar a frequência de publicações no blog</li><li>Expandir a presença nas redes sociais</li></ul>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Ver Relatório Completo",
          url: "#",
          styles: {
            backgroundColor: "#2b2d42",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Se você tiver alguma dúvida sobre este relatório ou quiser discutir estratégias para melhorar ainda mais seus resultados, agende uma reunião com seu gerente de conta.</p><p>Atenciosamente,<br>Equipe de Análise de Desempenho</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "course-launch",
    name: "Lançamento de Curso Online",
    subject: "Novo curso disponível: Domine o Marketing Digital em 8 semanas",
    thumbnail:
      "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para anunciar o lançamento de um novo curso online.",
    template: {
      name: "Lançamento de Curso Online",
      subject: "Novo curso disponível: Domine o Marketing Digital em 8 semanas",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 32px;">Novo Curso Online</h1>',
          styles: {
            color: "#3a0ca3",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Subheading",
          content: '<h2 style="font-size: 24px;">Domine o Marketing Digital em 8 Semanas</h2>',
          styles: {
            color: "#4361ee",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá,</p><p>Estamos entusiasmados em anunciar o lançamento do nosso mais novo curso online: <strong>Domine o Marketing Digital em 8 Semanas</strong>.</p><p>Este curso completo foi desenvolvido para profissionais e empreendedores que desejam dominar as estratégias mais eficazes de marketing digital e impulsionar seus resultados.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Course Details",
          content:
            '<div style="background-color: #f0f0ff; padding: 20px; border-radius: 8px;"><h3 style="margin-top: 0; color: #3a0ca3;">O que você aprenderá:</h3><ul><li>Estratégias avançadas de SEO</li><li>Marketing de conteúdo que converte</li><li>Publicidade paga nas principais plataformas</li><li>Email marketing de alta performance</li><li>Análise de dados e otimização de campanhas</li><li>Estratégias de mídia social para crescimento</li></ul></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Instructor",
          content:
            '<div style="display: flex; align-items: center;"><div style="flex: 0 0 100px; margin-right: 20px;"><img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Instrutor" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;"></div><div><h3 style="margin-top: 0; color: #3a0ca3;">Seu Instrutor: Ana Silva</h3><p>Especialista em Marketing Digital com mais de 10 anos de experiência, Ana já ajudou centenas de empresas a aumentarem sua presença online e multiplicarem seus resultados.</p></div></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Price",
          content:
            '<div style="text-align: center;"><h3 style="color: #3a0ca3; font-size: 24px; margin-bottom: 5px;">Investimento</h3><p style="font-size: 18px; margin-top: 0;">De <strike>R$997,00</strike> por apenas</p><h2 style="color: #4361ee; font-size: 36px; margin: 10px 0;">R$697,00</h2><p>ou 12x de R$58,08</p><p style="font-size: 14px; color: #ff5a5f;">* Oferta de lançamento válida até 15/04/2023</p></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "GARANTIR MINHA VAGA",
          url: "#",
          styles: {
            backgroundColor: "#4361ee",
            color: "#ffffff",
            borderRadius: 4,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Vagas limitadas! O curso começa em 20/04/2023 e as inscrições se encerram em 15/04/2023.</p><p>Se tiver alguma dúvida, responda a este email ou entre em contato pelo WhatsApp: (XX) XXXXX-XXXX.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "security-alert",
    name: "Alerta de Segurança",
    subject: "Alerta de Segurança: Atividade suspeita detectada",
    thumbnail:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para notificar usuários sobre atividades suspeitas em suas contas.",
    template: {
      name: "Alerta de Segurança",
      subject: "Alerta de Segurança: Atividade suspeita detectada",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 24px;">⚠️ Alerta de Segurança ⚠️</h1>',
          styles: {
            color: "#d62828",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 80,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Prezado(a) [Nome do Cliente],</p><p>Detectamos uma atividade suspeita em sua conta. Por medida de segurança, estamos entrando em contato para verificar se foi você quem realizou esta ação.</p>",
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Alert Details",
          content:
            '<div style="background-color: #ffe8e8; padding: 20px; border-radius: 8px; border-left: 4px solid #d62828;"><h3 style="margin-top: 0; color: #d62828;">Detalhes da Atividade:</h3><p><strong>Data e Hora:</strong> 12/03/2023 às 15:42 (Horário de Brasília)<br><strong>Localização:</strong> Kiev, Ucrânia<br><strong>Dispositivo:</strong> Windows PC<br><strong>Endereço IP:</strong> 192.168.xx.xx<br><strong>Ação:</strong> Tentativa de alteração de senha</p></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Se você reconhece esta atividade, não é necessário tomar nenhuma ação.</p><p>Se você <strong>NÃO</strong> reconhece esta atividade, recomendamos que tome as seguintes medidas imediatamente:</p>",
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Steps",
          content:
            "<ol><li>Altere sua senha imediatamente</li><li>Ative a autenticação de dois fatores</li><li>Verifique e atualize suas informações de contato</li><li>Revise as atividades recentes da sua conta</li></ol>",
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Proteger Minha Conta",
          url: "#",
          styles: {
            backgroundColor: "#d62828",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>A segurança da sua conta é nossa prioridade. Nunca compartilhamos suas informações pessoais ou solicitamos sua senha por email.</p><p>Se precisar de ajuda, entre em contato com nossa equipe de suporte.</p><p>Atenciosamente,<br>Equipe de Segurança</p>",
          styles: {
            color: "#666666",
            fontSize: 14,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "loyalty-program",
    name: "Programa de Fidelidade",
    subject: "Bem-vindo ao nosso Programa de Fidelidade Exclusivo",
    thumbnail:
      "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para convidar clientes para um programa de fidelidade exclusivo.",
    template: {
      name: "Programa de Fidelidade",
      subject: "Bem-vindo ao nosso Programa de Fidelidade Exclusivo",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Programa de Fidelidade VIP</h1>',
          styles: {
            color: "#6a0572",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Subheading",
          content: '<h2 style="font-size: 20px;">Você foi selecionado para participar!</h2>',
          styles: {
            color: "#6a0572",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Cliente],</p><p>É com grande satisfação que convidamos você a fazer parte do nosso exclusivo Programa de Fidelidade VIP. Como um dos nossos clientes mais valiosos, queremos recompensar sua lealdade com benefícios especiais e experiências únicas.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Benefits",
          content:
            '<div style="background: linear-gradient(135deg, #6a0572 0%, #ab83a1 100%); color: white; padding: 20px; border-radius: 8px;"><h3 style="margin-top: 0;">Seus Benefícios Exclusivos:</h3><ul><li>Acesso antecipado a novos produtos</li><li>Descontos exclusivos de até 25%</li><li>Frete grátis em todas as compras</li><li>Atendimento prioritário</li><li>Convites para eventos exclusivos</li><li>Presentes surpresa no seu aniversário</li></ul></div>',
          styles: {
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Membership Card",
          content:
            '<div style="background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; text-align: center;"><h3 style="color: #6a0572; margin-top: 0;">Seu Cartão de Membro VIP</h3><p style="font-size: 18px; font-weight: bold;">[Nome do Cliente]</p><p>Nível: Platinum</p><p>Membro desde: Março 2023</p><p>ID: VIP-2023-12345</p></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Ativar Minha Conta VIP",
          url: "#",
          styles: {
            backgroundColor: "#6a0572",
            color: "#ffffff",
            borderRadius: 30,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Para celebrar sua entrada no programa, preparamos um cupom de boas-vindas com 30% de desconto na sua próxima compra:</p><p style='text-align: center; font-size: 20px; font-weight: bold; color: #6a0572; background-color: #f9f9f9; padding: 10px; border-radius: 4px;'>VIP30</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Estamos ansiosos para proporcionar a você uma experiência excepcional como membro VIP.</p><p>Atenciosamente,<br>[Nome do Diretor]<br>Diretor de Relacionamento com o Cliente</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "app-update",
    name: "Atualização de Aplicativo",
    subject: "Nova atualização disponível: Confira as novidades!",
    thumbnail:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para informar usuários sobre atualizações e novos recursos de um aplicativo.",
    template: {
      name: "Atualização de Aplicativo",
      subject: "Nova atualização disponível: Confira as novidades!",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Nova Atualização Disponível</h1>',
          styles: {
            color: "#087e8b",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Version",
          content: '<h2 style="font-size: 20px;">Versão 3.5.0</h2>',
          styles: {
            color: "#087e8b",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 80,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Usuário],</p><p>Estamos empolgados em anunciar que uma nova atualização do nosso aplicativo está disponível! Esta versão traz melhorias significativas e novos recursos que foram desenvolvidos com base no feedback da nossa comunidade.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "What's New",
          content:
            '<div style="background-color: #f0f9fa; padding: 20px; border-radius: 8px;"><h3 style="margin-top: 0; color: #087e8b;">Novidades desta versão:</h3><ul><li><strong>Novo Design:</strong> Interface completamente reformulada para uma experiência mais intuitiva</li><li><strong>Modo Escuro:</strong> Agora você pode alternar entre os temas claro e escuro</li><li><strong>Desempenho Aprimorado:</strong> Melhorias significativas na velocidade e estabilidade</li><li><strong>Novos Recursos:</strong> Adicionamos a funcionalidade de exportação de dados e compartilhamento avançado</li><li><strong>Correções de Bugs:</strong> Resolvemos os problemas reportados pelos usuários</li></ul></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "image-grid",
          label: "Image Grid",
          columns: 3,
          images: [
            {
              src: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Nova Interface",
              caption: "Nova Interface",
            },
            {
              src: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Modo Escuro",
              caption: "Modo Escuro",
            },
            {
              src: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Novos Recursos",
              caption: "Novos Recursos",
            },
          ],
          styles: {
            spacing: 10,
            borderRadius: 8,
            showCaptions: true,
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Atualizar Agora",
          url: "#",
          styles: {
            backgroundColor: "#087e8b",
            color: "#ffffff",
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Não se esqueça de compartilhar sua experiência conosco após a atualização. Seu feedback é fundamental para continuarmos melhorando nosso aplicativo.</p><p>Atenciosamente,<br>Equipe de Desenvolvimento</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
  {
    id: "survey-invitation",
    name: "Pesquisa de Satisfação",
    subject: "Sua opinião vale prêmios! Participe da nossa pesquisa",
    thumbnail:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Email para convidar clientes a participarem de uma pesquisa de satisfação.",
    template: {
      name: "Pesquisa de Satisfação",
      subject: "Sua opinião vale prêmios! Participe da nossa pesquisa",
      components: [
        {
          id: createComponentId(),
          type: "logo",
          label: "Logo",
          content: logoPlaceholder,
          styles: {
            width: 40,
            align: "center",
            borderRadius: 0,
            backgroundColor: "transparent",
            padding: 10,
          },
        },
        {
          id: createComponentId(),
          type: "image",
          label: "Banner",
          content:
            "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          styles: {
            width: 100,
            align: "center",
            borderRadius: 8,
          },
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Heading",
          content: '<h1 style="font-size: 28px;">Sua Opinião é Valiosa para Nós!</h1>',
          styles: {
            color: "#ff9f1c",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>Olá [Nome do Cliente],</p><p>Gostaríamos de convidá-lo a participar da nossa pesquisa anual de satisfação. Sua opinião é fundamental para continuarmos melhorando nossos produtos e serviços.</p><p>A pesquisa leva apenas 5 minutos para ser concluída e suas respostas serão mantidas em total confidencialidade.</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Reward",
          content:
            '<div style="background-color: #fff8e8; padding: 20px; border-radius: 8px; border: 2px dashed #ff9f1c;"><h3 style="margin-top: 0; color: #ff9f1c;">Participe e Concorra!</h3><p>Ao completar a pesquisa, você automaticamente concorrerá a:</p><ul><li>1 Vale-Compras de R$500</li><li>5 Vales-Presente de R$100</li><li>10 Assinaturas Premium por 3 meses</li></ul><p>O sorteio será realizado no dia 30/04/2023 e os ganhadores serão notificados por email.</p></div>',
          styles: {
            color: "#333333",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 30,
        },
        {
          id: createComponentId(),
          type: "button",
          label: "Button",
          content: "Participar da Pesquisa",
          url: "#",
          styles: {
            backgroundColor: "#ff9f1c",
            color: "#ffffff",
            borderRadius: 4,
            padding: "15px 30px",
            textAlign: "center",
          },
        },
        {
          id: createComponentId(),
          type: "spacer",
          label: "Spacer",
          height: 20,
        },
        {
          id: createComponentId(),
          type: "text",
          label: "Text Block",
          content:
            "<p>A pesquisa estará disponível até 25/04/2023. Não perca esta oportunidade de compartilhar sua opinião e concorrer a prêmios exclusivos!</p><p>Agradecemos antecipadamente por sua participação.</p><p>Atenciosamente,<br>Equipe de Relacionamento com o Cliente</p>",
          styles: {
            color: "#666666",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "left",
          },
        },
      ],
      styles: {
        backgroundColor: "#ffffff",
        width: 600,
        padding: 30,
      },
    },
  },
]
