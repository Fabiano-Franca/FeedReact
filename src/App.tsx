import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

// author: { avatar_url: "", name: "", role: ""},
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/fabiano-franca.png",
      name: "Fabiano França",
      role: "Web Developer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galera 👋" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 3, type: "link", content: "fabiano.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/samuel-oliveira-dev.png",
      name: "Samuel Oliveira",
      role: "Web Developer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galera 👋" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 3, type: "link", content: "fabiano.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 10:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
