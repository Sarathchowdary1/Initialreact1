import UserProfile from './Components/UserProfile/index'
import './App.css'

const UserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sarath',
    role: 'software developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Pranathi',
    role: 'software Tester',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Bharathi',
    role: 'Django',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Bharath',
    role: 'Research Intern',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
