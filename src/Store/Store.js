import React,{useState} from "react";
import Item from "./Item"
import Teton from "./store-assests/teton.jpeg"
import Everglades from "./store-assests/everglades.jpeg"
import Bryce from "./store-assests/bryce.jpeg"
import Acadia from "./store-assests/acadia.jpeg"
import Badlands from "./store-assests/badlands.jpeg"
import Joshua from "./store-assests/joshua.jpeg"
import Sequoia from "./store-assests/sequoia.jpeg"
import Yosemite from "./store-assests/yosemite.jpeg"
const Store = ({add,remove}) => {


    return (
      <div className="store-wrapper">
        <h1>National Park Posters:</h1>
        <div className="collection-wrapper">
            <Item name="Grand Teton" add = {add} remove = {remove} src={Teton} cost="16.99" desc="Located in northwestern Wyoming, Grand Teton National Park protects stunning mountain scenery and a diverse array of wildlife. Rising more than 7,000 feet above the valley of Jackson Hole, the Teton Range dominates the park's skyline."></Item>
            <Item name="Everglades" add = {add} remove = {remove} src={Everglades} cost="10.99" desc="Everglades National Park is a 1.5-million-acre wetlands preserve on the southern tip of the U.S. state of Florida. Often compared to a grassy, slow-moving river, the Everglades is made up of coastal mangroves, sawgrass marshes and pine flatwoods that are home to hundreds of animal species."></Item>
            <Item name="Bryce Canyon" add = {add} remove = {remove} src={Bryce} cost="14.99" desc="Bryce Canyon National Park, a sprawling reserve in southern Utah, is known for crimson-colored hoodoos, which are spire-shaped rock formations."></Item>
            <Item name="Acadia" add = {add} remove = {remove} src={Acadia} cost="12.99" desc="Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine's Mount Desert Island. Its landscape is marked by woodland, rocky beaches and glacier-scoured granite peaks such as Cadillac Mountain, the highest point on the United States’ East Coast."></Item>
            <Item name="Badlands" add = {add} remove = {remove} src={Badlands} cost="13.99" desc="Badlands National Park is in South Dakota. Its dramatic landscapes span layered rock formations, steep canyons and towering spires. Bison, bighorn sheep and prairie dogs inhabit its sprawling grasslands. "></Item>
            <Item name="Joshua Tree" add = {add} remove = {remove} src={Joshua} cost="8.99" desc="Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes."></Item>
            <Item name="Sequoia" add = {add} remove = {remove} src={Sequoia} cost="9.99" desc="The park is notable for its giant sequoia trees, including the General Sherman tree, the largest tree on Earth by volume. The General Sherman tree grows in the Giant Forest, which contains five of the ten largest trees in the world."></Item>
            <Item name="Yosemite" add = {add} remove = {remove} src={Yosemite} cost="15.99" desc="Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome."></Item>
        </div>
      </div>
    );
  };
  
  export default Store;