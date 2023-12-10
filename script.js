setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRot = (30*hTime + 0.5*mTime);
    mRot = (6*mTime + 0.1*sTime);
    sRot = (6*sTime);

    hour = document.getElementById("hour");
    minute = document.getElementById("minute");
    second = document.getElementById("second");

    hour.style.transform = `rotate(${hRot}deg)`
    minute.style.transform = `rotate(${mRot}deg)`
    second.style.transform = `rotate(${sRot}deg)`
}, 1000)

