import 'src/css/App.css';

export type Card = {
  photo: string;
  userName: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    color: string;
  }[];
};


export const App = ({card}: {card: Card}) => {
  return (
    <div className='appContainer'>
      <img className='photo' src={card.photo} alt="profile photo" />
      <h1 className='userName'>{card.userName}</h1>
      <div className="skillContainer">
        {card.skills.map((skill, index) => (
          <div
            className="skill"
            key={index}
            style={{ backgroundColor: skill.color }}
          >
            <span>{skill.name}</span>
            <span>{skill.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

