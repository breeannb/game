export const initialState = {
  character: {
    image: 'https://cdna.artstation.com/p/assets/images/images/008/718/704/large/david-wittmann-oxportrait.jpg?1514846647',
    speed: 4, 
    might: 5, 
    sanity: 3, 
    knowledge: 3
  }, 
  haunt: {
    image: 'https://cdn.gamer-network.net/2019/articles/2019-05-17-14-51/snag-the-horrifying-betrayal-at-house-on-the-hill-for-gbp26-1558101072196.jpg/EG11/thumbnail/1920x1077/format/jpg/quality/80',
    speed: 8, 
    might: 8, 
    sanity: 8, 
    knowledge: 8
  }
}; 

export default function reducer(state, action) {
  switch(action.type){
    default: 
      return state;
  }
}
