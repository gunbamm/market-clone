const calcTime = (timestamp) =>{
const curTime = new Date().getTime()-9*60*60*1000;
const time =  new Date(curTime - timestamp);
const hour = time.getHours();
const minute = time.getMinutes();
const second = time.getSeconds();

if (hour > 0) return `${hour} 시간 전`;
else if(minute > 0) return `${minute}분 전`;
else if(second >0) return `${second}초 전`;
else "방금 전";
}

const renderData = (data) => {
    const main.document.querySelector("main");
  data.forEach((obj) => {
    const div = document.createElement("div");
    div.innerText = obj.title;
    main.appendChild(div);
  }
  );
};

const fetchList = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  console.log(data);
};

fetchList();
