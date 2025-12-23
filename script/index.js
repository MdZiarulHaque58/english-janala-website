const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) //promise of json data
    .then((json) => displayLesson(json.data));
}
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=>res.json())
<<<<<<< HEAD
    .then(data=>{
        const clickBtn=document.getElementById(`lesson-btn-${id}`);
        // clickBtn.classList.add("active");
        displayLevelWord(data.data)
    })

=======
    .then(data=>displayLevelWord(data.data))
>>>>>>> d6db1a6a83df41bf711d2d2f11dc0563710a9516
};
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
<<<<<<< HEAD

    if(words.length == 0){
        wordContainer.innerHTML = `
        <div class="text-center col-span-full rounded-xl py-10 space-y-6">
<img class="mx-auto" src="assets/alert-error.png" />
        <p class="text-xl font-medium text-gray-400 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
      
      </div>
        
        `;
    }

=======
    if(words.length == 0){
        wordContainer.innerHTML = `
        <div class="text-center bg-sky-100 col-span-full rounded-xl py-10 space-y-6">
<img src="assets/alert-error.png" />
        <p class="text-xl font-medium text-gray-400 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
      </div>
        `;
    }
>>>>>>> d6db1a6a83df41bf711d2d2f11dc0563710a9516
//     {
//     "id": 75,
//     "level": 1,
//     "word": "Eat",
//     "meaning": "খাওয়া",
//     "pronunciation": "ইট"
// }
<<<<<<< HEAD

=======
>>>>>>> d6db1a6a83df41bf711d2d2f11dc0563710a9516
    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-20 px-5 space-y-5">
<<<<<<< HEAD
        <h2 class="font-semibold text-2xl">${word.word ? word.word: "শব্দ পাওয়া যায়নি"}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="text-2xl font-medium font-bangla">"${word.meaning? word.meaning: "Meaning পাওয়া যায়নি" } / ${word.pronunciation ? word.pronunciation: "Pronounciation পাওয়া যায়নি" }"</div>
=======
        <h2 class="font-semibold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="text-2xl font-medium font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
>>>>>>> d6db1a6a83df41bf711d2d2f11dc0563710a9516
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div> `
        wordContainer.append(card);
    })

}
const displayLesson = (lessons) => {
    const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML= "";
    for(let lesson of lessons){
        console.log(lesson);
        const btnDiv = document.createElement("div");
<<<<<<< HEAD
        btnDiv.innerHTML = `    
        <button id="lession-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
=======
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
>>>>>>> d6db1a6a83df41bf711d2d2f11dc0563710a9516
        `;
    levelContainer.append(btnDiv);
    }
};
loadLessons();