import React, {Component } from 'react'
import PropTypes from 'prop-types'
import 'grommet/scss/vanilla/index.scss';
import App from 'grommet/components/App';
import {Section, Image, Header, Footer, Article, Title, Label} from 'grommet';

const articleState = {
    text: '   Everyone cheats on their diets—dinosaurs were no exception. What large vegetarian ornithischian could resist the sweet crunch of crustacean shells embedded in dense, soft, decaying wood? It’s a dinosaurian delicacy that paleontologists have just uncovered.  '  +
'   Per usual, fossilized feces came to the rescue. You can learn a lot from poop, fresh or otherwise, but it\'s especially helpful in its fossilized form—it can tell scientists what ancient creatures munched on. It\'s not like there are old prehistoric lifestyle magazines for us to peruse, so it’s difficult to tell how dinosaurs spent their hours. What they ate, how they bred, where they got their fashion trend alerts; these things are all hard to discern from the fossil record. So ancient poops, known more professionally as coprolites, can be very useful indeed. And to think, you just flush yours down a toilet.  '  +
'   Megaherbivores were thoughtful enough to leave us sizable clues in the form of multi-liter coprolites. They left this pile of research material in what we now call southern Utah, inside the Kaiparowits rock formation in Grand Staircase-Escalante National Monument. The sediment there dates back to 76.0–74.1 million years ago and is riddled with fossils, of both the poop and non-poop varieties. Paleontologists excavated and analyzed these samples, then published their findings in Scientific Reports.  '  +
'   Coprolites at other sites, also made by ornithiscians—one of the two major dinosaurs groups marked by their “bird hips”—have been found to contain large quantities of rotten wood. This is not by accident. They didn’t accidentally chomp some tree mush while going in for grubs. In all likelihood, the fibrous plant matter was an intentional dietary choice. There are enough wood-laden coprolites embedded in various layers of the fossil record to suggest this was a consistent diet, not just the mistake of a few sloppy dinos. Why rotten wood? We’ll get to that in a second. First: the shellfish.  '  +
'     '  +
'   See, it wasn’t just decayed plant matter that these paleontologists found—it was shellfish too. And that seemed a little weird, given that these animals were thought to be strict herbivores. It might also seem odd if you have a mental image of crustaceans as exclusively marine in nature. Were these ornithiscians harvesting mollusks from the sea floor? Were there bird-hipped diving dinos that sold their fishy goods in exchange for rotten wood snacks? Sadly, no. Ancient crustaceans also lived on land, often in or on decaying trees, where land-dwelling creatures were free to munch on them.  '  +
'   It’s possible that these shellfish were only ingested accidentally, when the dinos tried to eat delicious old logs. It’s more likely, though, that it was intentional. These crustaceans weren’t tiny little buggers that could have been swallowed like a pill—each was somewhere between 20 and 60 percent of the width of an ornithiscian mouth. It would be hard to not notice something of that size. That fact, combined with the sheer number of poops found to contain crustacean shells, means that these dinos were probably going after the protein intentionally.  '  +
'   All this means that shellfish may have been a source of protein and calcium for ornithiscians, at least seasonally. If primo vegetation was in short supply (though not so short that they’d need to migrate), rotting wood and crustaceans could have become an appealing food source. The paleontologists also point out that egg-laying animals generally need to take in lots of calcium before breeding time, so they can pop out all those calcium-rich shells. Dinosaurs may have needed to do the same thing.  '  +
'  Now back to the choice of wood as a dietary component. Why eat something that’s been pre-digested by fungus and bugs? Well, all that rotting means that dinosaurs could actually digest the cellulose and fiber inside. Plus, decayed wood often contains a supplemental form of protein: small grubs (the other white meat). Yum.  ',
    author:"Sara Chodosh",
    title: "Enormous dinosaur poops show that even herbivores ate shellfish",
    publishedDate: "September 22, 2017"
}

class ArticlePage extends Component {

      constructor() {
          super()
          this.state = articleState
      }

      render() {
          return (
            <App>
              <Article scrollStep={false} controls={false}>
              <Header>
                  <Image src='http://www.freepngimg.com/download/dinosaur/1-2-dinosaur-png-file.png' alt='http://i.dailymail.co.uk/i/pix/2016/07/13/18/21FDBA0E00000578-3688636-image-a-20_1468431416190.jpg'/>
              </Header>
                <Header splash = {false}>
                  <Title>
                    {this.state.title}
                  </Title>
                  <Label>
                    By: {this.state.author}
                  </Label>
                  <Label align = "center">
                      {this.state.publishedDate}
                  </Label>
                </Header>
                <Section pad = "small"
                         justify = "center"
                         width = 'medium'
                         align = "center"
                         full = "true">
                  {this.state.text}
                </Section>
                </Article>
              </App>
          )
      }


}

export default ArticlePage
