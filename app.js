const correctAnswers=['A','B','B','B' ];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');


form.addEventListener('submit', e=>{
e.preventDefault();

let score=0;
const usersAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

usersAnswers.forEach((answer,index)=>{
  if (answer===correctAnswers[index]){
    score += 25;}
})

const sc=document.querySelector('.man');


scrollTo(0,0);
sc.textContent=`${score}%`;
result.classList.remove('d-none');


let output=0;
const timer= setInterval(()=>{

sc.textContent=`${output}%`;
if(output===score)
{
  clearInterval(timer);
}else{
  output++;}


},10);

});
