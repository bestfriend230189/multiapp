export class PostService {
  posts = [
    {
      id: '1',
      title: 'Directors of Ukroboronprom\'s enterprise detained on suspicion of embezzling over $2 mln',
      datainfo: 'Agents of the National Anti-corruption Bureau of Ukraine (NABU) and the Specialized Anti-corruption Prosecutor\'s Office (SAPO) NABU on March 4 detained the incumbent and former directors of state enterprise SpetsTechnoExport, which is part of state-run Ukroboronprom Concern. "On March 4, 2019, detectives of NABU and SAPO detained the current and former directors of the state-owned enterprise SpetsTechnoExport on suspicion of embezzling $2.225 million," NABU said on Facebook. Also detained were three more former officials of SpetsTechnoExport, NABU said. More details will follow, it said.'
    },
    {
      id: '2',
      title: 'Ukraine reports US$68 mln deficit of balance of payments in Jan 1',
      datainfo: 'The outflow from the financial account in the first months of 2019 amounted to $509 million. REUTERS Ukraine saw a US$68 million deficit of the balance of payments in January 2019, which was 84.9% down from the deficit recorded year-over-year (y-o-y). The surplus of the current account over the period under review was estimated at $446 million, which was up by 3.7 times from the figure posted in 2018. Read also Deficit of Ukraine\'s foreign trade in goods, services 56.5% down in Jan The outflow from the financial account in the first months of 2019 amounted to $509 million, almost the same figure as reported in the same period last year. Ukraine saw a surplus of the balance of payments in 2018 for the fourth year in a row, totaling US$2.877 billion, which was 12% up from the surplus recorded in 2017.'
    },
    {
      id: '3',
      title: 'Prodigy legend Keith Flint dies aged 49 – media',
      datainfo: 'The Prodigy star Keith Flint has been found dead at his home, aged 49. The iconic singer, from Dunmow, Essex, was discovered at around 8am this morning after police and paramedics were called to the property, according to The Sun. Officers remain outside the rural cottage this morning but his death is not being treated as suspicious. Flint\'s bandmates confirmed his death was suicide. Sharing a picture of the late star, present band members Liam Howlett and Leeroy Thornhill wrote: "The news is true, I can’t believe I’m saying this but our brother Keith took his own life over the weekend," according to The Mirror. Sharing a picture of the late star, present band members Liam Howlett and Leeroy Thornhill wrote: "The news is true, I can’t believe I’m saying this but our brother Keith took his own life over the weekend. The Prodigy emerged from the underground rave scene of the early 1990s to become one of the UK\'s biggest bands. They reached Number 1 in the UK singles charts with Firestarter and Breathe in 1996 and notched up six Number 1 albums. Flint became an iconic figure in the British music scene with his energetic live performances and distinctive hair and tattoos.'
    }
  ];
  addpost(title: string, data: string) {
    console.log('add post clicked');
    const newpost = {
      addid: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
      addtitle: title,
      adddata: data
    };
    this.posts.push({id: newpost.addid, title: newpost.addtitle, datainfo: newpost.adddata});
    console.log(this.posts);
  }
}
