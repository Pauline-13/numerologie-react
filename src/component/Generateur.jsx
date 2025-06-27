import { useState } from 'react';
import etoiles from '../assets/Background_Unsplash.jpg'; 

function Generateur() {
  const [dateNaissance, setDateNaissance] = useState('');
  const [resultat, setResultat] = useState(null);
  const [showNegatif, setShowNegatif] = useState(false);

  const descriptions = {
   1: "Le leader : T’es le boss, même quand personne t’a élu. Tu prends les décisions, tu motives les troupes… et t’avoues, t’aimes bien que ça tourne autour de toi (juste un peu).",

2: "Le diplomate : T’es la Suisse. T’aimes la paix, les hugs, et que tout le monde s’aime. Si tu pouvais régler les conflits mondiaux avec un bon chocolat chaud, tu le ferais.",

3: "Le créatif : T’as une idée chelou à la minute, tu fais des carnets de projets qui finissent jamais et t’as probablement déjà changé de coupe de cheveux cette semaine. T’es le chaos... mais artistique.",

4: "Le bâtisseur : Toi, t’aimes les trucs carrés. Ta chambre est rangée au cordeau, t’as 3 réveils pour être sûr(e), et t’as sûrement un classeur intitulé “Papiers Importants 2018–présent”.",

5: "L’aventurier : Impossible à suivre. T’es déjà à l’aéroport pendant qu’on cherche encore nos clés. Spontané(e), fougueux(se) et un peu allergique à la routine (et aux horaires).",

6: "Le protecteur : T’es le parent du groupe, même si t’as 22 ans. Tu penses à tout : gilets, médocs, goûters. Si quelqu’un pleure, tu débarques avec un plaid et une solution.",

7: "Le penseur : Ton cerveau, c’est une bibliothèque avec des néons violets. Tu philosphes à 2h du mat’ sur le sens de la vie ou pourquoi les pigeons ont une vie secrète. Respect.",

8: "Le manager : T’as un tableau Excel pour tout. Même tes week-ends sont optimisés. Tu veux réussir, t’as déjà une playlist “ambition 3000”, et t’as probablement dit “on se focus” à des gens.",

9: "L’humanitaire : Ton cœur, c’est une guimauve. Tu veux sauver les chats errants, les abeilles et ton pote toxique (mauvaise idée pour le dernier, mais c’est l’intention qui compte).",

11: "Le messager spirituel : T’as une vibe mystique. T’écoutes les gens avec les yeux fermés, tu sens l’énergie de la pièce et t’as peut-être un cristal dans ta poche. On sait pas comment, mais tu captes des trucs.",

22: "Le maître bâtisseur : T’as la vision d’Elon Musk, sans les tweets chelous. Tu veux construire un empire, mais avec du cœur. T’as des plans sur 20 ans, des rêves fous et un sérieux sens de la logistique.",

33: "Le maître enseignant : T’es genre l’incarnation de la tisane et du bon conseil. Tu veux le bien du monde, t’aides tout le monde même quand t’as pas le temps, et t’es probablement né(e) avec une aura “maman poule zen”.",
  };

  const descriptionsNegatives = {
  1: "Tu veux tellement avoir le dernier mot que tu pourrais argumenter avec une pierre. Autoritaire, borné(e), tu fais passer tes idées avant les gens. Grosse vibe “c’est moi le patron”.",
    2: "Tu t’écrases pour ne pas déranger. Hypersensible, dépendant(e) affectif(ve), tu passes ton temps à te demander si t’as “dit un truc qui dérange”. Spoiler : non, mais là oui.",
    3: "T’es distrait(e), instable, et un peu drama queen. Tu lances mille projets et tu finis... zéro. T’as l’énergie d’un feu d’artifice, mais souvent dans le vide intersidéral.",
    4: "T’es carré(e)… genre trop. Rigide, maniaque, et allergique au changement. La spontanéité te donne des boutons. T’es en PLS si on change les plans à la dernière minute.",
    5: "T’as l’engagement d’un chat dans un sac. Instable, bordélique, fuyant(e), t’es toujours ailleurs. Tu veux tellement tout tester que t’approfondis… rien.",
    6: "Trop protecteur(trice), trop contrôlant(e), trop “je sais ce qui est bon pour toi”. Tu veux tellement aider que t’en deviens oppressant(e). Les gens ont le droit de galérer parfois, tu sais ?",
    7: "Tu vis dans ta bulle et tu regardes les gens comme s’ils avaient tous raté un truc. Froid(e), distant(e), tu méprises parfois le monde réel. Philosopher c’est bien, participer c’est mieux.",
    8: "Matérialiste, arrogant(e), obsédé(e) par le succès. Tu vois les gens comme des ressources, et tu peux devenir un mini-dictateur si on te laisse trop faire.",
    9: "Tu joues les martyrs. T’aimes tellement aider que tu t’oublies… et tu culpabilises les autres s’ils ne font pas pareil. T’es Gandhi en version fatiguée et passive-agressive.",
    11: "Hyper susceptible, lunatique, perché(e). T’écoutes les vibrations mais pas les vraies conversations. Tu finis par croire que personne ne te comprend. (C’est p’têt un peu vrai, remarque.)",
    22: "Trop exigeant(e), tyrannique, tu vis dans un PowerPoint géant. Tu veux changer le monde mais tu détruis ton entourage en chemin. Burnout level : construction divine.",
    33: "T’as une tendance au sacrifice permanent. Tu veux sauver tout le monde, et tu fais culpabiliser ceux qui ne veulent pas être sauvés. T’es une tisane empoisonnée quand ça dérape.",
  };

   function handleSubmit(e) {
    e.preventDefault();
    if (!dateNaissance) return;
    const chiffres = dateNaissance.replaceAll('-', '').split('').map(Number);
    let somme = chiffres.reduce((a, b) => a + b, 0);
    while (![11, 22, 33].includes(somme) && somme > 9) {
      somme = somme.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    setResultat(somme);
    setShowNegatif(false);
  }

   return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
      <img
        src={etoiles}
        alt="Fond étoilé"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-start p-6 pt-10 text-white">
        <h1 className="text-5xl font-light mb-10 drop-shadow-xl rounded-xl px-6 py-3 text-white font-italiana">
          La Numérologie
        </h1>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-md w-full max-w-md mb-10 text-white text-sm sm:text-base leading-relaxed text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 bg-white/60 text-black rounded-full py-2">
            Qu’est-ce que c’est ?
          </h2>
          <p className="mb-3">
            C’est une méthode ancienne qui permet de mieux comprendre qui vous êtes à travers les chiffres liés à votre date de naissance ou à votre nom.
            Chaque nombre révèle des traits de personnalité, des forces, des blocages potentiels.
          </p>
          <p className="mb-3">
            Dans une ère où le bien-être mental devient essentiel, on cherche tous à se recentrer, à se sentir aligné, à comprendre nos schémas.
            Mais ce n’est pas toujours facile de trouver les bons thérapeutes, ou d’avoir les moyens d’être bien accompagné.
          </p>
          <p className="mb-3">
            La numérologie peut être une première étape simple, accessible et surprenante pour :
            <br />– Mieux comprendre vos réactions et comportements
            <br />– Identifier ce qui vous freine ou vous challenge
            <br />– Mettre en lumière vos talents naturels.
          </p>
          <p>
            Elle ne remplace pas un accompagnement thérapeutique, mais elle peut vous donner des clés pour avancer dans votre vie, avec plus de clarté et de confiance.
            <br /><br />
            Nous avons tous un profil de vie unique. Laissez-vous tenter et calculez votre profil, vous serez peut-être surpris du résultat.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-md w-full max-w-md mb-10 text-white text-sm sm:text-base leading-relaxed text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 bg-white/60 text-black rounded-full py-2">
            Le profil de vie
          </h2>
          <p className="mb-3">
            Le profil de vie est l’un des éléments les plus importants en numérologie.
            Il se calcule à partir de votre date de naissance complète : jour + mois + année.
          </p>
          <p className="mb-3">
            Il représente votre but personnel, vos forces naturelles, vos défis et constitue une direction globale qui guide votre vie.
            C’est un peu comme une carte routière de votre existence : il ne prédit pas ce qui va se passer, mais il vous aide à mieux comprendre ce que vous êtes profondément et où vous allez.
          </p>
          <p className="mb-3">
            <strong>Méthode de calcul :</strong><br />
            On additionne tous les chiffres de votre date de naissance jusqu’à obtenir un chiffre entre 1 et 9, ou un nombre maître (11, 22 ou 33).
          </p>
          <p>
            Pas de panique pour ceux qui ne sont pas à l’aise avec les calculs, nous avons un générateur ci-dessous.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg w-full max-w-md text-center"
        >
 <h2 className="text-xl sm:text-2xl font-semibold mb-7 bg-white/60 text-black rounded-full py-2">
            Générateur date de naissance
          </h2>
          {/* <label htmlFor="date" className="block text-2xl mb-7 font-light text-white">
            Date de naissance
          </label> */}
          <input
            type="date"
            id="date"
            value={dateNaissance}
            onChange={(e) => setDateNaissance(e.target.value)}
            className="w-full max-w-xs mx-auto p-3 text-center rounded-full text-black font-medium bg-white/90 shadow-inner outline-none focus:ring-2 focus:ring-pink-200 mb-6"
          />
          <button
            type="submit"
            className="w-full bg-[#554E55] hover:bg-[#B898A3] text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md"
          >
            Calcule
          </button>
        </form>

        {resultat && (
          <div className="mt-10 bg-white/30 backdrop-blur-xl p-6 rounded-3xl shadow-lg max-w-md text-center text-black">
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow">
              Ton chiffre de vie : {resultat}
            </h2>
            <p className="italic text-white text-lg drop-shadow">
              {showNegatif ? descriptionsNegatives[resultat] : descriptions[resultat]}
            </p>
            <button
              onClick={() => setShowNegatif(!showNegatif)}
              className="mt-4 text-sm text-white underline hover:text-pink-200 transition"
            >
              {showNegatif ? "Revenir à la version fun " : "Voir le côté obscur "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Generateur;