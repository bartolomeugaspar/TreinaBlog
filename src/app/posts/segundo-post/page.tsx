import PostBody from "@/ui/components/PostBody/postbody";

export default function SegundoPostPage() {
  return (
    <>
      <PostBody post={{
        id: 2,
        title: 'Segundo Post',
        description: 'Este é o conteúdo do meu segundo post.',
        pictureUrl: 'https://photokit.com/images/tools/webp/cutout4.webp',
        slug: 'segundo-post',
        content: (
          <>
            <p>Bem-vindo ao meu segundo post! Aqui estão alguns comandos Git essenciais para começar:</p>
            <ul>
                <li><strong>git status</strong>: Verifica o estado dos arquivos no repositório.</li>
                <li><strong>git branch</strong>: Lista, cria ou deleta branches.</li>
                <li><strong>git checkout [branch]</strong>: Muda para a branch especificada.</li>
                <li><strong>git merge [branch]</strong>: Mescla a branch especificada na branch atual.</li>
                <li><strong>git log</strong>: Exibe o histórico de commits.</li>
                <li><strong>git diff</strong>: Mostra as diferenças entre commits, branches ou arquivos.</li>
            </ul>
            <p>Esses comandos são fundamentais para o uso avançado do Git no controle de versões. Pratique-os para se familiarizar!</p>
          </>
        )
      }} />
    </>
  );
}
