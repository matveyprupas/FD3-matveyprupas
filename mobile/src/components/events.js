import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter(); 
// в потоке voteEvents будут все события, связанные с голосованием
// событие "edited" - кликнут вариант ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// событие "EFreeAnswerTextChanged" - изменён текст свободного ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями




// answerClicked = (EO) => {
//     //this.props.cbSelected(this.props.code);
//     voteEvents.emit('EAnswerClicked',this.props.code);
//   }

export {mobileEvents};
