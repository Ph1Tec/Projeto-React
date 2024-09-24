import Trash from '../../assets/lixeira.svg'
import './style.css'

function Home() {
  const users = [
    {
      id: '2323asdasd',
      name: 'Rodolfo',
      age: '33',
      email: 'rod@email.com',

    },
    {
      id: '2323asdasd23232as',
      name: 'Aline',
      age: '28',
      email: 'aline@email.com',
    },
  ]
  return (

    <div className='container'>
      <form>
        <h1>Cadastro</h1>
        <input placeholder='Nome' type='text' name='nome' />
        <input placeholder='Idade' type='number' name='idade' />
        <input placeholder='Email' type='email' name='email' />
        <button type='button'>Cadastrar</button>
      </form>
      

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade:<span>{user.age}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>
          <div>
          <button>
            <img src={Trash} />
          </button>
        </div>
     </div>

  ))}
    </div>
  )
}

export default Home
