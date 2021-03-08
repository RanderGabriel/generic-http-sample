import React, { useState } from 'react';
import { getTodos, Todo } from './services/todo-service';
import { Comment, getComments } from "./services/comment-service"
import { List } from './components/List';
import { Item } from './components/Item';
import { getPosts, Post } from './services/post-service';

function App() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res);
  }
  const fetchComments = async () => {
    const res = await getComments();
    setComments(res);
  }
  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res);
  }
  return (
    <div>
      <header>
        <p>
          Exemplo de abstração de camada HTTP
        </p>
        <button onClick={fetchTodos}>Buscar Todos</button>
        <List data={todos?.slice(0, 3)} renderItem={(t) => <Item key={t.id} label={t.title} />}/>
        <button onClick={fetchComments}>Buscar Comentários</button>
        <List data={comments?.slice(0, 3)} renderItem={(c) => <Item key={c.id} label={c.name} />}/>
        <button onClick={fetchPosts}>Buscar Posts</button>
        <List data={posts?.slice(0, 3)} renderItem={(p) => <Item key={p.id} label={p.title} />}/>
      </header>
    </div>
  );
}

export default App;
