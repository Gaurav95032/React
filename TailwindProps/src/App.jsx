import Card from "./components/Card";

function App() {
  return (

    <div className="flex justify-center items-center h-screen w-screen bg-gray-400">
      <Card gameName="Ninja Gaiden - Deluxe Edition" imageSource="https://image.api.playstation.com/vulcan/ap/rnd/202505/2909/4dee2f762d9baf2435e9f1fbe026da1b32451e75100ab525.png" price="Rs 4,800" description="Pre-order now to receive the Dark Dragon Descendant Yakumo Skin at launch." />
      <Card gameName="SILENT HILL f - Deluxe Edition" imageSource="https://image.api.playstation.com/vulcan/ap/rnd/202505/0614/a01c437341a76a26b82895aa2028f53bafe73a787383ca63.png?w=230&thumb=false" price="Rs 5,699" description="Discover a new chapter in the SILENT HILL series, blending psychological horror with a haunting Japanese setting." />
      <Card gameName="Towa and the Guardians of the Sacred Tree Deluxe Edition Towa and the Guardians of the Sacred Tree Deluxe Edition" imageSource="https://image.api.playstation.com/vulcan/ap/rnd/202505/2010/b062c1c6d8f000248b03a593b1274f70cd105bb079b1b53a.png?w=230&thumb=false" price="Rs 2,499" description="Pre-order now to receive the Guardians' Vestments Costume Set, which grants additional costumes for Towa and all 8 Guardians." />
      <Card gameName="Daemon X Machina: Titanic Scion -  Digital Deluxe Edition" imageSource="https://image.api.playstation.com/vulcan/ap/rnd/202505/2304/a1bc62837db30b1cd07d751191786deea102afc12be27438.png?w=230&thumb=false" price="Rs 5,699" description="The Digital Deluxe Edition of Daemon X Machina: Titanic Scion includes the base game and additional DLC that will release over several months" />
    </div>
  );
}

export default App;