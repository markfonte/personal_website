import React, {lazy, Suspense} from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  CardActions,
  CircularProgress,
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
const InteractionCard = lazy(() => import('../shared/interaction_card.jsx'));
import ShareIcon from '@material-ui/icons/Share';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const renderLoader = () => <CircularProgress color="secondary" />;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = {
  title: {
    margin: '16px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardContent: {
    textAlign: 'left',
  },
};

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successDialogOpen: false,
    };

    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  copyToClipboard(postLink) {
    navigator.clipboard.writeText(postLink);
    this.setState({successDialogOpen: true});
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({successDialogOpen: false});
  }

  render() {
    const {classes} = this.props;

    const posts = [
      {
        title: `The Power of Compromise`,
        lastUpdated: `September 5th, 2020`,
        disclaimer: ``,
        titleBlurb: <div>
              A friend recently remarked that “compromise” is often considered a dirty word. For many, it has a negative connotation. It’s associated with capitulating to the enemy’s demands; with traitors and treason. While I hope that you, the reader, don’t see it in that light, I think that it’s critical for us to consider the ramifications of this mindset for those that do.
        </div>,
        body: <div>
          <Typography variant="h5" color="secondary">In Government</Typography>
          <Typography variant="body1" paragraph>
I remember my middle school social studies teacher, Mr. (Rusty) Fuller, remarking that “back in [his] day, people used to actually talk to each other in our government”. While it was likely just an offhand comment, it has carried weight in my mind for many years. Of course, that statement is subject to its biases and of course, the government in “his day” had a litany of other problems. Nonetheless, I defer judgement to a man who has lived through it both ways and am frightened by the obvious polarization in our country these days.
            <br/><br/>
Take, for example, the impeachment of Donald Trump. When the House of Representatives passed Article I and Article II of impeachment in December 2019, Democrats across the country rejoiced in their victory. The sentiment was that, even though they knew that the Senate was going to acquit Trump, they had won the greater “moral victory”. I believe that this was a deeply sad and short-sighted response.
            <br/><br/>
Why was I so disturbed by this? Let’s take a closer look at the impeachment trial. In the House, not a single Republican voted in favor of impeachment in either article. Later in the Senate, there was just one Republican who voted in favor of Article I, and not a single Republican who voted for Article II. You know what this tells me? There were no winners here.
          </Typography>
          <Typography variant="h5" color="secondary">As Good As Wrong</Typography>
          <Typography variant="body1" display={'inline'}>
This brings me to one of my fundamental beliefs. I believe that, </Typography><Typography display={'inline'}><b>no matter how correct you “actually are”, if you cannot convince others that you are “actually right”, you are still wrong.</b></Typography>
          <Typography variant="body1" paragraph>
            <br/>
Some of you might cross your arms and say “well, if you’re right, you’re right. That’s what matters!” And therein lies the precise problem that I want to address.
            <br/><br/>
Let’s start by looking at the positive and negative effects of the Democrats actions in the impeachment trial:
          </Typography>
          <Typography variant="h6">Pros:</Typography>
          <Typography variant="body1" paragraph>
• They were “actually right” based on the evidence (and if you disagree with this point, don’t let it distract you from the larger message here)
            <br/>
• Therefore, they feel like they can rest easy knowing that they “did the right thing” and are walking with the wind
          </Typography>
          <Typography variant="h6">Cons:</Typography>
          <Typography variant="body1" display={'inline'}>
• They failed to actually impeach him, even though they were “actually right” based on the evidence
            <br/>
• 495/496 (99.798%) of Republican votes across both articles and both chambers voted AGAINST the impeachment articles that the Democrats proposed, even though they were “actually right” based on the evidence
            <br/>
• They set a precedent for future votes in Congress along strictly party lines and without compromise
            <br/>
• As the highest lawmakers in the the country, they set a similar precedent for the rest of us as well
            <br/><br/>
Regardless of who gets blamed for the outcome, they not only failed to reach their ultimate goal, but they managed to make things much worse for themselves going forward. This was assuming that they were actually correct that Trump should be impeached based on the evidence. Imagine a parallel situation where they think that they are correct, but they actually aren’t - it’s even worse!
            <br/><br/>
I can hear your objections. “Why is it the Democrats fault that none of the Republicans would listen to their arguments? The Democrats still did the right thing here!” The keyword here being “fault,” a word of blame.
            <br/><br/>
Now we are at a moral crossroads. We can either say: “I give up! I know that I’m right, and if other people don’t want to listen, screw them! I’m done trying to negotiate with the enemy.” Or we can pick ourselves up, take the harder path and start figuring out how to </Typography><Typography display={'inline'}><b>listen</b></Typography><Typography variant="body1" display={'inline'}> to the other side. How to </Typography><Typography display={'inline'}><b>understand</b></Typography><Typography variant="body1" display={'inline'}> where they are coming from. How to </Typography><Typography display={'inline'}><b>compromise</b></Typography><Typography variant="body1" display={'inline'}>.
            <br/><br/>
You can choose the easy path. You can say, “this isn’t worth my time. These people will never listen.” You can decide that the other side is morally reprehensible and that even being seen negotiating with them will destroy your reputation. You can decide that to compromise is weak and that seeking to understand the other side is making deals with the devil. I am naive enough to believe that there is another way.
          </Typography>
          <br/><br/>
          <Typography variant="h5" color="secondary">The Harder Path</Typography>
          <Typography variant="body1" display={'inline'}>
I choose to follow a different path. I believe that refusing to listen, understand, debate, and compromise with people who disagree with you </Typography><Typography display={'inline'}><b>is an admission that you’ve lost</b></Typography><Typography variant="body1" display={'inline'}> before you even begin. It’s an admission that either your ideas aren’t as perfect as you think they are, or you have given up on the ability to find good and reason with people whose opinions don’t align with yours. And each time someone gives up on the path to understand each other and compromise, a piece of our collective humanity dies.
            <br/><br/>
It is particularly sad because those in Congress should know better. They should know that they need to set an example for the rest of the country. If Congress is exactly divided on partisan lines for extremely important issues, what the hell do you think is happening in the rest of the country?
            <br/><br/>
If I was a Democratic Congressperson, throwing insults at or looking down on Republicans for “not seeing the truth” would be irrelevant, counterproductive, and even morally reprehensible. Whether or not the other side has views that you consider hateful, racist and beyond, does not mean that 99.798% of the time you should be unable to convince them that you are correct. You have a choice. Either you can believe in your ability to convince more than 0.202% of people that you are correct, or you can believe that 99.798% of the other side is fundamentally unable to understand your reasoning and make the right choice. Choose the latter, and you are dead on arrival.
            <br/><br/>
So I ask again - if you know that you are correct, but you are unable to convince anyone who wasn’t already predisposed to believe you, does it matter? From a righteousness standpoint, perhaps yes! You can ride your high horse of having the “moral high ground” all you want. But if your goal is to advance humanity, to make this world a better place for everyone in it, to further a culture of listening to each other and fighting for the common good, then the answer is a resounding no.
            <br/><br/>
To me, the most important thing that any Democrat could have done in that situation is to say “hey, I know we don’t agree on a lot of things, and I even think your views are pretty hateful! But I want to understand why you don’t agree with the evidence being presented. Here is what I think, but what do you think about it?” And be eager to understand, not to argue or to quit.
            <br/><br/>
Because they were unable to convince a single Republican to vote “yes” on both articles, I consider it an absolute moral dereliction of duty. The ramifications of their inability to compromise only helped further the deep divide in our country. It, and many other actions like it, will continue to tear our country apart.
            <br/><br/>
          </Typography>
          <Typography variant="h5" color="secondary">Call to Action</Typography>
          <Typography variant="body1" display={'inline'}>
Of course, to sit and talk to people who disagree with you is the tougher path. To open yourself up for criticism is the tougher path. To seek to understand is the tougher path. To be open to compromise is the tougher path. But in the long run it puts us in a position to advance society and further the most important issues facing us today. I urge you to not give up trying to reach understanding with those around you that have completely different views. Don’t let the fear of striking out prevent you from even stepping up to the plate.
            <br/><br/>
I choose to believe that even the most hateful and racist people are worth talking with and understanding. To stop believing this is to give up on them. On us. And I will not give up. When John Lewis and Nelson Mandela discussed their freedom struggles, they emphasized how </Typography><Typography display={'inline'}><b>both the oppressors and the oppressed are prisoners to society</b></Typography><Typography variant="body1" display={'inline'}>. How any human that oppresses another human is a prisoner just the same. Do not let their words fall on deaf ears.
            <br/><br/>
Do not give up on seeking to understand each other. To help each other. Admitting that you are wrong is the ultimate sign of strength. Changing your views to reflect new evidence is a sign of strength. Compromising for a common good is a sign of strength.
            <br/><br/>
And please, if you disagree with me, tell me why I’m wrong. Give me new perspectives. Poke holes in my arguments. I am eager to make mistakes because it gives me the opportunity to fill in the gaps. But I need your help, because I can’t fix problems that I don’t know I have.
            <br/><br/>
The path of listening, understanding and compromising is tough. But at least it’s </Typography><Typography display={'inline'}><b>tough together</b></Typography><Typography variant="body1" display={'inline'}> instead of </Typography><Typography display={'inline'} paragraph><b>easy apart.</b></Typography>
          <br/><br/>
          <Typography variant="caption"><i>This article is dedicated to Mr. Fuller and Mr. Strite.</i></Typography>

        </div>,
        firstPublished: `September 5th, 2020`,
        versionNumber: 1,
        postNumber: 2,
      },
      {
        title: `Owning Your Job Negotiations`,
        lastUpdated: `August 31st, 2020`,
        disclaimer: `I am writing this as a gainfully employed member of Amazon. I am thankful for that job, and I understand the risks of publicly sharing any criticisms of the company for which I work. However, I will not refrain from telling the truth as I see it, so Amazon and other companies mentioned here are free to take my words as the constructive criticism in which they were meant.`,
        titleBlurb: <div>
              Employers have been looking out for their best interests since their conception. Unfortunately, employees often <i>allow themselves to be taken advantage of</i> by their employers, particularly during employment negotiations. It’s time to change that.
        </div>,
        body: <div>
          <Typography variant="h5" color="secondary">Companies Looking Out For Their Own Best Interests, Part One</Typography>
          <Typography variant="body1" paragraph>
Employment contracts in the United States in 2020 are almost exclusively “employee-at-will.” Meaning, if the employee wants to quit at any point, they are free to do so. If the employer wants to let the employee go without cause, they are free to do so (unless a legitimate claim can be made that it was an unjust termination of the basis of gender, race, etc.).
            <br/><br/>
Why do I bring this up? I often find that people talk about their employment contracts as if they are legally binding documents that force them to work for the company, even if they don’t want to. In almost every case, this is not true.
            <br/><br/>
There are many things that an employer can do to “force the hand” of potential employees (we will get to these later), and one of them is getting them to believe that by signing a contract to work with a company, they must actually go work for that company. Once you recognize that this is just a subtle tactic to tilt the scales in their favor, you can begin to resist it.
          </Typography>
          <Typography variant="h5" color="secondary">“Exploding Offers” & The Stigma Around Reneging</Typography>
          <Typography variant="body1" paragraph>
Different companies can have very different recruitment schedules - you might apply for a company that offers you an interview a full two months later. For anyone who receives multiple job offers, it stands to reason that the first offer they receive doesn’t have to be the best offer they can/will receive.
            <br/><br/>
In the fall of 2019, I was looking for a full-time software job for when I graduated from college the following May. I started by getting a return offer from J.P. Morgan Chase & Co. at the end of the summer (August 9th, 2019). I was given a deadline of October 1st to accept the offer, or it would be rescinded.
            <br/><br/>
Offers like these are called “exploding offers” and are a tool of the oppressor. The problem with an October 1st deadline was that I was currently looking for other job opportunities as well. As someone looking for a job, it is in my best interest to collect as many offers as possible, then decide which one I think is the best fit for me. With an exploding offer, the company is trying to get me to sign the contract by a certain date so that I stop looking for other, potentially much better options.
            <br/><br/>
Keep in mind that I wouldn’t start any of these jobs for a minimum of eight or nine months at this point. If the deadline to accept the offer was, say, a month before I started working, then my case that it was a persuasion tool would be significantly weakened. But that is certainly not the case here.
            <br/><br/>
I can hear you thinking, “Mark, they probably just wanted a decision by that date so that they could know their recruiting numbers!”
            <br/><br/>
This is not a new argument. First of all, on some level that is a valid concern. Businesses need to gauge their recruitment numbers so that they can hit their quotas, especially during peak recruitment periods. However, this is already a messy problem. Every year, people get offers and turn companies down (without reneging, they just have better opportunities). Almost every company therefore has some kind of policy to extend more offers than they expect to be accepted, or a contingency plan like “if person A declines, let’s offer person B.” But that’s okay! Their employees are being paid to manage these problems, and it’s always a messy situation no matter what. At worst, not setting these arbitrary deadlines makes the situation a little messier for the company to deal with.
            <br/><br/>
There is a difference between if I had gone to J.P. Morgan Chase & Co. and said “hi, I will have an answer for you by October 1st”, and them giving me the offer with this “exploding” clause attached to it. In the latter case, they are asserting that they are in control and will dictate all of the terms in the agreement.
            <br/><br/>
Recall that different companies have vastly different recruitment timelines and that the <b>first</b> offer someone receives isn’t guaranteed to be the <b>best</b>. With J.P. Morgan Chase & Co., I asked for an extension of the October 1st deadline, and was given a two-week extension until October 15th from the recruiter. Again, I didn’t say, “can I have an extension until October 15th?” Rather, the recruiter gave me that arbitrary deadline.
            <br/><br/>
In addition, by making excuses for why it is okay for employers to arbitrarily rush such an important decision, we are both absolving them of blame and closing the door to the possibility that this could actually be an underhanded tactic on their part.
            <br/><br/>
By October 15th, I was still interviewing and applying for other positions, but I wanted to make sure that I had a job when I graduated no matter what. I had not considered whether or not J.P. Morgan Chase & Co.’s offer was the best offer, because I knew I wasn’t done job searching at that point. Because they gave me the arbitrary deadline of October 15th, and I wanted to guarantee that I had a job when I graduated, I accepted it.
            <br/><br/>
Around the same time, I was in talks with Learning A-Z about a return offer. I found them honorable in the fact that they didn’t give me an exploding offer - they just told me that they would prefer to know by a certain date for recruitment purposes. I was happy to respect that request.
            <br/><br/>
RetailMeNot gave me an offer in late October, and gave me an exploding deadline in November. It wasn’t until November 27th that Amazon offered me - but again, they gave me an exploding deadline of January 3rd.
            <br/><br/>
You can see how circumstances can make it tough to balance doing what’s best for the company (like never reneging) and what’s best for yourself. The important choice is this: if I had received all four offers at the exact same time, what company would I have chosen? My answer was Amazon, so I was willing to renege in order to make the right decision for myself (and, most likely, the company. Who wants an employee that would rather be somewhere else?). It wasn’t ideal, but reneging was a tool that I used to make the right decision. <b>Had I simply accepted the first offer that I received and been unwilling to renege, I would have made the wrong decision.</b>
          </Typography>
          <Typography variant="h5" color="secondary">Companies Looking Out For Their Own Best Interests, Part Two</Typography>
          <Typography variant="body1" paragraph>
Employers benefit from being the ones to set the terms in these employment negotiations. If I was a little more short-sighted or if I decided that I was morally against reneging, I would have either 1) accepted the offer and stopped looking for others or 2) turned it down and taken the chance that I wasn’t employed upon graduation. Neither of these were in my best interest. Someone thinking in the short-term might think that this tactic is in the best interest of the company. It is not.
            <br/><br/>
Exploding offers are not in the best interest of either side of the negotiation in the long run. As I alluded to earlier, who wants employees at their company who don’t want to be there?
            <br/><br/>
Imagine a hypothetical where every employee that you hire has their full list of potential offers to accept, but they choose your company. No rushing them, no mismatched deadlines or underhanded tactics. Now you know that, at the very least, your company is full of people who wanted to be there. In and of itself, that can be a strong basis for a powerful, exciting company culture. That’s the ideal situation. So how can we move closer to that ideal?
            <br/><br/>
Imagine a hypothetical where a star high school basketball player, say Lebron James (he never went to college), is being recruited by colleges. A smaller school, say Cornell University, gives him a scholarship offer during his sophomore year of high school. The catch is, they only give him three weeks to decide. Now, as a sophomore in high school, he knows he is pretty good. But he’s not quite sure if other schools will want him, and he doesn’t believe that he can risk not going to college on scholarship, given his current financial situation. So he accepts the offer.
            <br/><br/>
Now you decide. Was Cornell really looking out for his best interests in that hypothetical situation? Don’t you think it might have been better if he was able to collect all of his offers, weigh his options, then pick the best one?
            <br/><br/>
Imagine how grumpy he would have been when he arrived at Cornell, knowing he made the wrong decision but didn’t want to back out. Would that really have been the best in the long term for Cornell either?
            <br/><br/>
If you have to use extracurricular tactics to force your potential employees to join your company, you are letting everyone down. You are letting the potential employees down because you aren’t looking out for their best interests. You are letting yourself down because you are admitting that, given all the potential places that Potential Employee #1 could get offers from, they would not choose you. So, as the company, you do things like: setting an arbitrary deadline for them to accept your offer, threaten to rescind it, making them feel bad for reneging after you accepted based on their arbitrary deadlines. You could even argue that setting the salary and terms of employment fall into the same category (why can’t I say, “I will accept if you give me $80,000 a year” and then <b>they</b> can counter if they want, not vice versa?) but that’s a different discussion altogether.
            <br/><br/>
A popular way that employers fight back is by threatening to or actually blacklisting candidates who renege across their industry. This is common in more traditional fields like banking and law, where if Potential Employee #1 decides to renege on an offer from Employer #1, Employer #1 will tell Employer #2 and every other popular employer not to hire Potential Employee #1. Again, this is a negotiation tactic. It’s a threat that, “if you step out of line, we will ruin your career” and “if you step out of line, we will make an example out of you so that nobody else does”. They are looking out for their own best interests.
            <br/><br/>
These are negotiation tactics that the employers think are in their own best interest. Do not confuse their best interests with your own.
          </Typography>
          <Typography variant="h5" color="secondary">Shifting The Blame To Employees</Typography>
          <Typography variant="body1" paragraph>
One of the biggest issues I have is the tendency for us to shift the blame back to the employees. I believe that chastising your friend for reneging isn’t just incorrect; it’s morally wrong. It allows the employer to escape the blame while essentially self-policing something that is in the best interest of the company.
            <br/><br/>
This is a similar tactic that the government and many malicious corporations have been using forever, where they get “the people” to fight amongst themselves while standing to the side, twiddling their thumbs and lining their pockets. Resist the temptation to admonish other employees for using any tool that is in their best interest.
          </Typography>
          <Typography variant="h5" color="secondary">Call To Action</Typography>
          <Typography variant="body1">
I am asking you to consider ways in which people who seem to be looking out for your best interests (“but the recruiter was so nice to me!” or “they really seemed to care about me!”) might actually not be. It can take a critical eye and a few deep breaths to see past the smoke and mirrors. That’s the way they want it - it’s in their best interest. It’s hard to fight something you don’t even know exists.
            <br/><br/>
Next time some entity, employer or not, decides that they are going to lay down terms for you before you ever get a chance to say anything, stop for a second. Ask yourself, what are they doing here that is only in their best interest? What is in mine?
            <br/><br/>
I make the assertion that arbitrary exploding deadlines, setting the terms of contracts, guilting potential employees into accepting, having “nice recruiters”, threatening to or actually blacklisting potential employees who renege, and many more are leverage tactics by employers. Obviously this is only the tip of the iceberg, but I present these examples to illustrate that we need to be on the lookout for what employers are doing that might not be in our best interest, no matter how they seem at first glance.
            <br/><br/>
I also make the case that, as long as employers are going to do what is in their best interest, you must also take steps to do the same for yourself. An employer wouldn’t hesitate to fire you, rescind your offer, reduce your pay and beyond if that fits their best interest. You must be prepared to use the tools (like reneging) at your disposal to fight for your own best interests. No one else will.
          </Typography>
        </div>,
        firstPublished: `August 31st, 2020`,
        versionNumber: 1,
        postNumber: 1,
      },
    ];

    return (
      <div>
        <MetaTags>
          <title>Blog</title>
          <meta
            name="description"
            content="Mark Fonte blog"
          />
        </MetaTags>
        <Snackbar onClose={this.handleClose} open={this.state.successDialogOpen} autoHideDuration={4000}>
          <Alert variant="outlined" onClose={this.handleClose} severity="success">
            Link copied to clipboard!
          </Alert>
        </Snackbar>
        <Typography className={classes.title} variant="h6"paragraph>
            Welcome! Here are some of my thoughts on issues that I find important.<br/>Disagreements and discussions are highly encouraged 😊
        </Typography>
        {posts.map((post) => (
          <Card raised={true} className="card" key={post.title}>
            <Accordion>
              <AccordionSummary
                aria-label={post.title}
                aria-controls={post.title + '-content'}
                id={post.title + '-header'}
                expandIcon={
                  <Tooltip
                    title="Expand/collapse card"
                    arrow>
                    <IconButton style={{padding: 0}}>
                      <ExpandMoreIcon />
                    </IconButton>
                  </Tooltip>
                }>
                <a name={'post_' + post.postNumber} href={'post_' + post.postNumber} className="gone">
                  {post.postNumber} Post
                </a>
                <div
                  className={classes.expansionHeaderContainer}>
                  <CardHeader
                    className="card-header"
                    title={post.title}
                    subheader={post.firstPublished}
                  />
                  <Typography variant="subtitle1">
                    <br/>
                    {post.titleBlurb}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <CardContent className={classes.cardContent}>
                  {post.disclaimer ?
                    <Typography variant="caption" color="textSecondary" paragraph>
                      {'*Disclaimer: ' + post.disclaimer + '*'}
                    </Typography> :
                  ''}

                  {post.body}
                  <Typography variant="caption" color="textSecondary" paragraph>
                    <i>{post.lastUpdated}</i>
                  </Typography>
                </CardContent>
              </AccordionDetails>
            </Accordion>
            <CardActions>
              <Tooltip
                title="Share article"
                arrow>
                <IconButton
                  aria-label="Share article"
                  onClick={() => this.copyToClipboard(process.env.REACT_APP_CLIENT_URL + 'blog#post_' + post.postNumber)}>
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        ))}
        <Suspense fallback={renderLoader()}>
          <InteractionCard pagename="blog" />
        </Suspense>
      </div>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
