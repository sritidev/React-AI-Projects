import './App.css'
import './index.css'
import Card from './components/Card'
import {Button} from'./components/ui/button'

function App() {

  return (
    <>
      <h1>Learn React</h1>
      <Button variant='destructive'>Click me</Button>
        
      <div className="flex gap-8">
      <Card
      img="https://scitechdaily.com/images/Coffee-With-Sugar-Cubes.jpg"
       title ="Hello React"
       para="React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.
       "
       />
      <Card 
      img="https://scitechdaily.com/images/Coffee-With-Sugar-Cubes.jpg"
      title="Hello Python"
      para="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically type-checked and garbage-collected."
      
      
      />
      <Card
      img="https://scitechdaily.com/images/Coffee-With-Sugar-Cubes.jpg"
       title="Hello Node"
       para="Nodee"
       />
      </div>
    </>
  )
}

export default App
