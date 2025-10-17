import { PostInterface } from "../../@types/PostInterface";

export default function useIndex() {
    const posts: PostInterface[] = [
        {
            id: 1,
            title: "Primeiro Post",
            description: "Descrição do primeiro post",
            pictureUrl: "https://blog.fotto.com.br/content/images/2024/09/criatividade-nas-fotos.jpg",
            slug: "primeiro-post",
        },
        {
            id: 2,
            title: "Segundo Post",
            description: "Descrição do segundo post",
            pictureUrl: "https://photokit.com/images/tools/webp/cutout4.webp",
            slug: "segundo-post",
        },
        {
            id: 3,
            title: "Terceiro Post",
            description: "Descrição do terceiro post",
            pictureUrl: "https://static.artguru.ai/_next/static/media/PC_after_01.9f053e7c.webp",
            slug: "terceiro-post",
        }
    ];
    return { posts };
}