import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Invitation.scss"

function Invitation() {

  const handlePrint = (formData) => {
    const { wifeName, husbandName, regiment } = formData;
    const today = new Date().toLocaleDateString();
  
    const letterContent = `
      <html>
        <head>
          <title>Rejoins-moi au Front !</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px;)}
            h1 { text-align: center; }
            p { margin: 10px 0; line-height: 1.5; }
            .signature { margin-top: 30px; font-style: italic; text-align: right; }
          </style>
        </head>
        <body>
          <h1>💖 Pour la Démocratie et pour Nous 💖</h1>
          <p><strong>${today}</strong></p>
          <p>Ma chère <strong>${wifeName}</strong>,</p>
          <p>Depuis que j’ai rejoint le <strong>${regiment}</strong>, chaque bataille livrée me rappelle à quel point tu me manques. 
          Les feux de la guerre illuminent le ciel, mais aucune lumière n’égale celle que tu fais briller en moi.</p>
          
          <p>Nous nous battons ici pour un avenir meilleur, mais comment savourer la victoire sans toi à mes côtés ? 
          Rejoins-moi sur le front ! Ensemble, nous pourrons répandre la Démocratie main dans la main, 
          éradiquer les ennemis de la liberté et bâtir un monde où notre amour pourra prospérer sous le drapeau de la Super-Terre.</p>
  
          <p>Le recrutement est ouvert, et il n’y a qu’une place que je veux à mes côtés : la tienne.</p>
  
          <p class="signature">Avec tout mon amour et toute ma ferveur révolutionnaire,<br><strong>${husbandName}</strong></p>
        </body>
      </html>
    `;
  
    const printWindow = window.open('', '_blank');
    printWindow.document.write(letterContent);
    printWindow.document.close();
    printWindow.print();
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      wifeName: e.target.wifeName.value,
      husbandName: e.target.husbandName.value,
      regiment: e.target.regiment.value
    };
  
    handlePrint(formData);
  };
  
  return (
    <div className='Invitation'> 
        <div class="background"></div>
        <div class="Overlay"></div>
        <NavBar/>
        <section className='DestinationBot'>
        <div className='Title'>
          <h1><span>04</span> RECRUIT YOUR WIFE !!!</h1>
        </div>
        <div className='Container'>
          <div className='left'>
            <img src="/img/soldiers.webp" alt="" />
          </div>
          <div className='right'>
            <div className='Title'>
              <h3>Envoyez lui une lettre de recrutement :</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nom de l'épouse :</label>
                <input type="text" name="wifeName" required />
              </div>
              <div>
                <label>Nom du mari :</label>
                  <input type="text" name="husbandName" required />
              </div>
              <div>
                <label>Régiment :</label>
                  <select name="regiment">
                    <option value="1st Galactic Division">1st Galactic Division</option>
                    <option value="Super-Terre Elite">Super-Terre Elite</option>
                    <option value="Les Purificateurs">Les Purificateurs</option>
                  </select>
              </div>
              <div>
                <button type="submit">Générer la lettre</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Invitation