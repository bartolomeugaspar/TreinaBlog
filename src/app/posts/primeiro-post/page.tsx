import PostBody from "@/ui/components/PostBody/postbody";

export default function ComandosGitPage() {
  return (
    <>
    <PostBody post={
      {
        id: 1,
        title: 'Homem dando Cara de Confuso',
        description: 'Este é o conteúdo do meu primeiro post.',
        pictureUrl: 'https://blog.fotto.com.br/content/images/2024/09/criatividade-nas-fotos.jpg',
        slug: 'primeiro-post',
        content: (
          <>
            <p>Bem-vindo ao meu primeiro post! Aqui estão alguns comandos Git essenciais para começar:</p>
            <ul>
              <li><strong>git init</strong>: Inicializa um novo repositório Git.</li>
              <li><strong>git clone [url]</strong>: Clona um repositório existente.</li>
              <li><strong>git add [arquivo]</strong>: Adiciona arquivos ao estágio para commit.</li>
              <li><strong>git commit -m "mensagem"</strong>: Cria um commit com uma mensagem descritiva.</li>
              <li><strong>git push</strong>: Envia as alterações locais para o repositório remoto.</li>
              <li><strong>git pull</strong>: Puxa as últimas alterações do repositório remoto.</li>
            </ul>
            <p>Esses comandos são fundamentais para o uso do Git no controle de versões. Pratique-os para se familiarizar!</p>
          </>
        )
      }
      } />
    </>
  );
}
