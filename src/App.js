import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";

export default class App extends Component {
  render() {
    const listNews = [
      {
        image: "https://image.tmdb.org/t/p/w500//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        title: "Thor: Love and Thunder",
        summary:
          "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
        title: "DC League of Super-Pets",
        summary:
          "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, eligendi!",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        title: "Minions: The Rise of Gru",
        summary: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//AnmIMKAQjXLjD2DI0ba4D9DpkHv.jpg",
        title: "Banana",
        summary: "The Minions fight over a delicious banana... but is that all they want?!",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        title: "Iron Man 3",
        summary: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
        title: "Luck",
        summary: "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
      },
    ];

    return (
      <div>
        <Navbar />
        <div className="App-header">
          {listNews.map((item) => {
            return <Card src={item.image} title={item.title} summary={item.summary} />;
          })}
        </div>
      </div>
    );
  }
}
