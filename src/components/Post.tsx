import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

// author: { avatar_url: "", name: "", role: ""},
// publishedAt: Date
// content: String

type Author = {
    avatarUrl: string,
    name: string,
    role: string,
}

type Content = {
    id: number,
    type: string,
    content: string
}

type Props = {
    author: Author,
    content: Content[],
    publishedAt: Date
}

export function Post({ author, content, publishedAt } : Props){

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar path={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()} >Publicado {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    
                    if(line.type === 'paragraph'){
                        return <p key={line.id}>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p key={line.id}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}