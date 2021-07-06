import babyMusic from "../public/assets/pageHD-images/alireza-attari-mp_FNJYcjBM-unsplash.jpg";
import joyLife from "../public/assets/pageHD-images/mark-paton-Tfqx8XAgU4Q-unsplash.jpg";
import guitar from "../public/assets/pageHD-images/katie-montgomery-Ln1bd3eXATU-unsplash.jpg";
import musicSheet from "../public/assets/pageHD-images/kelly-sikkema-HwU5H9Y6aL8-unsplash.jpg";

const hdContents = [
  {
    filter: "about",
    title: "What is Hearing impairment?",
    infos: [
      "Hearing impairment is an impairment in hearing, whether permanent or fluctuating and occurs when you lose part or all of your ability to hear. Hearing impairments are classified in terms of the severity and type of hearing impairment.",
      "Why would I need a hearing test? Some people may suspect that they have hearing loss. They have trouble hearing people talk to them when they’re in a crowded room, or they’ve been told they raise the volume on the TV way too high. But not all people know that they have a problem. You may not realize that you have hearing loss, because it’s often a gradual process. That’s why it’s important to have your ears checked when your doctor says you should, even if you think you’re fine.",
    ],
    image: joyLife,
    altImage: "HEAR THE JOY IN LIFE layed out in scrabble pieces.",
  },

  {
    filter: "test",
    title: "About the Hearing Test",
    infos: [
      "This online hearing test is designed to help users find out if they may have problems with hearing speech and if they should consult a hearing care professional.",
      "In this test users identify words they hear under different volumes and levels of background noise. The user begins by selecting their language of choice, either English, Hindi, Kannada, Tamil, or Telugu. The language names are written in their native format to make it easy for people to choose. They are then shown a screen with 9 icons, a volume control, and a play audio button. When the user hits play, they listen to the word that’s spoken and then select the icon that represents that word. The user can play the audio as many times as they need. If the user needs to, they can increase the volume until they hear the word. After they click an icon, they hit submit and a new audio is loaded. They repeat playing the audio and selecting the proper icon until they have listened to all 9 audio files. At the end the test gives them a score out of 9 saying how many words they were able to identify correctly.",
      "This test is a self-assessment tool to measure hearing difficulties and problems. This test is for informational purposes only. If you believe you may have a hearing impairment please consult an ENT Doctor or Otolaryngologist. Results may vary depending on many factors including the type and quality of your device display and the noise in your surroundings.",
    ],
    image: guitar,
    altImage: "Head of Fender Jazzmaster guitar.",
  },
 {
      filter: "pitch-test",
      title: "About the Frequencies Test",
      infos: [  
        "This online frequency test is designed to help users find out if they may have problems with hearing certain frequencies and if they should consult a hearing care professional.",
        "In this test users will be asked to listen to tones at 250, 500, 1000, 2000, 3000, 4000, and 8000HZ, and if they can hear them press a button labeled 'Heard'. If they cannot hear them, they will press 'Didn't Hear'. This test is a self-assessment tool to measure hearing difficulties and problems. This test is for informational purposes only and cannot diagnose hearing disorders by itself. If you believe you may have a hearing impairment please consult an ENT Doctor or Otolaryngologist. Results may vary depending on many factors including the type and quality of your device audio and the noise in your surroundings.",                                    
      ],
      image: musicSheet,
      altImage: "Headphones on a Music Sheet"
 },
  {
    filter: "types",
    title: "Types of Hearing Impairment and Treatment",
    infos: [
      "Conductive hearing loss is when a hearing impairment is due to problems in the outer ear, middle ear, ear canal, eardrum, or the ossicles, which are the tiny bones in the middle ear. When the sound is not being conducted properly through the ear, conductive hearing loss occurs. Most cases of conductive hearing loss can be corrected medically or surgically.",
      "Sensorineural hearing loss (SNHL), also referred to as nerve hearing loss, occurs when there is damage to either the auditory nerve or the cochlea, which is the inner ear. The hearing loss in SNHL is permanent, although it may be possible to treat it with hearing aids.",
      "Mixed hearing loss is when When conductive hearing loss and SNHL occur at the same time. Mixed hearing loss occurs when there is both damage to the outer or middle ear and damage to the inner ear.",
      "Central hearing loss occurs when there are problems within the brain that interfere with the ability to interpret or understand sounds. This is the rarest type of hearing impairment and the hardest to treat.",
    ],
    image: babyMusic,
    altImage: "Baby wearing headphones and smiling.",
  },
  {
    filter: "instructions",
    title: "Instructions",
    infos: [
         "Before taking this online test you should:",

         "1. Set up somewhere quiet - a loud and busy room will make it much harder to hear properly and get accurate results",
         "2. Decide between speakers or headphones - we recommend headphones, as these will test your right and left ears individually",
         "3. Turn the volume to a level where it’s comfortable for you",
         "4. Once you’re relaxed and confident in your surroundings, feel free to begin",

         "Taking the Test: ",
         "1.Hit the play button and listen to the audio",
         "2.Select the icon that matches the word you hear",
         "3.After you select the icon, click submit",
         "4.After you submit, a new audio will be loaded. Repeat the above steps until you recieve a score"
    ]
},

];

export default hdContents;
