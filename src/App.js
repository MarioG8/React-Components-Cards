import "./App.scss";
import Card from "./components/Card";
import CardFlex from "./components/CardFlex";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="app">
      <h1>Mountains</h1>
      <div className="wrapper">
        <Card
          img="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
          title="Mountains - Ecosse"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80"
          title="Mountains - Marmolada Italy"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1393&q=80"
          title="Mountains - Polish Tatra"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1463003416389-296a1ad37ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          title="Mountains - Ecosse"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1534419234121-27689a5fcd71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Mountains - Marmolada Italy"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1530295314625-30d3b777ac7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          title="Mountains - Polish Tatra"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1534419234121-27689a5fcd71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Mountains - Marmolada Italy"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
        <Card
          img="https://images.unsplash.com/photo-1530295314625-30d3b777ac7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          title="Mountains - Polish Tatra"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam
        "
        />
      </div>
      <div className="sea">
        <h1>Sea's</h1>
      </div>
      <Separator />
      <div className="wrapper-flex">
        <CardFlex
          img="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2VhfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1544778896-f361697857e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
        <CardFlex
          img="https://images.unsplash.com/photo-1544778896-f361697857e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, molestiae."
        />
      </div>
    </div>
  );
}

export default App;
