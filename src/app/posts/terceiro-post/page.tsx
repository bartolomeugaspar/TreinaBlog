import PostBody from "@/ui/components/PostBody/postbody";
export default function TerceiroPostPage() {
  return (
    <>
      <PostBody post={{
        id: 3,
        title: 'Terceiro Post',
        description: 'Este é o conteúdo do meu terceiro post.',
        pictureUrl: 'https://static.artguru.ai/_next/static/media/PC_after_01.9f053e7c.webp',
        slug: 'terceiro-post',
        content: (
          <>
            <p>Bem-vindo ao meu terceiro post! Aqui estão alguns comandos Git essenciais para começar:</p>
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
      }} />
    </>
  );
}
    