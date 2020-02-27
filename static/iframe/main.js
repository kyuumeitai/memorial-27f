let data;
let i = -1;
const width = vw(100);
const height = 400;
const cols = 10;
let theta, l, currentPerson, currentOrder, arc;

const circleHeight = 40;
const circleWidth = width/(cols + 2);

const isFirefox = typeof InstallTrigger !== 'undefined';
const agePond = (isFirefox) ? 1 : -1;


const orderBy = (field) => {
  if (field == "Edad") {
    data.sort((a, b) => parseFloat(a[field]) < parseFloat(b[field]) ? agePond : -agePond);
    data.sort((a, b) => a['Tramo de edad'] < b['Tramo de edad'] ? 1 : -1);
  }

  else data.sort((a, b) => a[field] > b[field] ? 1 : -1);
  // if (field === 'Género') data.sort((a, b) => a[field] > b[field] && a[field] === 'Femenino' && b[field] === 'Femenino'? -1 : 1);
  for (let i = 0; i < data.length; i++){
    data[i].id = i;
  }
}

const reorder = () => {
  group
    .selectAll('line')
    .transition()
    .duration(400)
    .attr('stroke', 'white')
    .attr("x2", (d) => width / 2 + Math.cos(theta(d.id)) * l(parseFloat(d["Edad"])))
    .attr("y2", (d) => height / 2 + Math.sin(theta(d.id)) * l(parseFloat(d["Edad"])));

  matrixGroup
    .selectAll('.glyph')
    .transition()
    .duration(400)
    .attr('opacity', 0.5);

}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

// .row(function(d) { i++; return {id: i, age: +d['Edad'], name: d['Nombre'], status: d['Categoría'], cause: d['Causa de Fallecimiento'], city: d['Ciudad']}; })
// .get(function(error, rows) {
  //   console.log(rows);
  //   data = rows;
  // });

  ////////////////////////

const svg = d3.select("#idiom")
              .append("svg")
              .attr('viewBox', `0 0 ${width} ${height}`)
              .attr("preserveAspectRatio", "xMinYMin meet")
              .classed("svg-content", true);

const matrixSvg = d3.select("#matrix")
              .append("svg")
              .attr('viewBox', `0 0 1000 5400`)
              .attr("preserveAspectRatio", "xMinYMin meet")
              .classed("svg-content", true);

const group = svg.append('g');

const arcGroup = svg.append('g')
                    .attr('transform', `translate(${width/2}, ${height/2})`);

const matrixGroup = matrixSvg.append('g');

const arcBy = (field) => {
  arcGroup.selectAll('path')
          .remove();
  const divitions = [];
  let last = 0;
  if (field != "Apellidos"){
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i][field] != data[i + 1][field]) {
        divitions.push({ start: last/data.length * Math.PI * 2,
          end: i/data.length * Math.PI * 2, startId: data[last].id,
          endId: data[i].id });
        last = i;
      }
    }
    divitions.push({ start: last/data.length * Math.PI * 2, end: Math.PI * 2,
      startId: data[last].id, endId: data[data.length - 1].id })
  }
  else {
    divitions.push({start: 0, end: Math.PI*2})
  }
  arcGroup.selectAll('path')
    .data(divitions)
    .enter()
    .append('path')
    .attr('d', d => arc.startAngle(d.start).endAngle(d.end)())
    .attr('stroke', 'black')
    .attr('stroke-width', 3)
    .attr('fill', 'white');

}

d3.csv('27F-vis.csv').then(datum => {
  data = datum;
  // const matrix =  document.getElementById('matrix');
  for (let i = 0; i < data.length; i++){
    data[i].id = i;
    data[i]["Género"] = data[i]["Género"].trim();
  }
  const maxAge = d3.max(data, d => d["Edad"]);
  let currentAngle = 0;

  const offset = 20;
  const paddingLeft = 20;
  const paddingTop = 30;

  document.getElementById('caption').innerHTML = `${data.length-25} Personas fallecieron y 25 quedaron como desaparecidas a causa del terremoto y tsunami de 2010`

  arc = d3.arc()
          .innerRadius(Math.min(width*.45, 300, height*.45) + 15)
          .outerRadius(Math.min(width*.45, 300, height*.45) + 20);

  l = d3
    .scaleLinear()
    .domain([0, maxAge])
    .range([0, Math.min(width*.45, 300, height*.45)]);

  theta = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([0, Math.PI * 2]);

  group
    .selectAll('line')
    .data(data)
    .enter()
    .append('line')
    .attr('id', d => `line-${d.id}`)
    .attr("x1", width / 2)
    .attr("y1", height / 2)
    .attr("x2", (d) => width / 2 + Math.cos(theta(d.id)) * l(parseFloat(d["Edad"])))
    .attr("y2", (d) => height / 2 + Math.sin(theta(d.id)) * l(parseFloat(d["Edad"])))
    .attr("opacity", .5)
    .attr('stroke', 'white');

  arcGroup.selectAll('path')
          .data([{}])
          .enter()
          .append('path')
          .attr('d', () => arc.startAngle(0).endAngle(Math.PI*2)())
          .attr('stroke', 'black')
          .attr('stroke-width', 3)
          .attr('fill', 'white');

  const matrixData = data.slice().sort((a, b) => a["Testimonio"] > b["Testimonio"]);
  for (let i = 0; i < matrixData.length; i++) {
    matrixData[i].matrixId = i;
  }

  console.log(matrixData);

  matrixGroup
    .selectAll('circle')
    .data(matrixData)
    .enter()
    .append('svg:image')
    .attr('opacity', .5)
    .attr('class', 'glyph')
    .attr('cursor', 'pointer')
    .attr('xlink:href', '../assets/crux2.png')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', d => (d.matrixId % cols * 100))
    .attr('y', d => Math.floor(d.matrixId / cols)*100)
    .on('click', d => {
      const age = parseFloat(d["Edad"].replace(',','.'));
      const ageString = age > 1 ? `${age} años` : age === 1 ? `${age} año` : `${Math.ceil(age * 12)} meses`;
      document.getElementById('name').innerHTML = `${d["Nombres"]} ${d["Apellidos"]}`;
      document.getElementById('ageAndRegion').innerHTML = `${statusGender(d["Categoría"], d['Género'])}, ${ageString}`;
      document.getElementById('city').innerHTML = `${d["Ciudad"]}`;
      document.getElementById('deathCause').innerHTML = `${d["Causa de fallecimiento"]}`;
      const urlName = `${d["Nombres"]} ${d["Apellidos"]}`.split(" ").map(s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(new RegExp(/Ã±/g),"n")).join("-");
      document.getElementById('readMoreLink').href= `https://interactivo.latercera.com/memorial-27f/${urlName}/`

      modal.style.display = "block";
    });

  let fy = 0;
  let dfy = 0;

  const dragstarted = () => {
    fy = d3.event.y;
  };

  const statusGender = ( status, gender)  => {
    if (gender === 'Masculino') return status;
    else return status.replace('o','a');
  }

  const dragged = () => {
    const ny = d3.event.y;
    currentAngle += d3.event.x < (width / 2) ? (fy - ny)/6 : -(fy - ny)/6;
    fy = ny;

    group.attr("transform", `rotate(${currentAngle},${width / 2},${height / 2})`);
    arcGroup.attr("transform", `translate(${width/2}, ${height/2}) rotate(${currentAngle + 90},0,0)`);

    currentAngle = currentAngle % 360;
    currentPerson = Math.floor(data.length - 1 - ((currentAngle - 90) * ((data.length - 1)/360)));
    currentPerson = (currentPerson < 0) ? (data.length - 1 + currentPerson) : currentPerson;
    currentPerson = currentPerson > (data.length - 1) ? currentPerson % (data.length - 1) : currentPerson;
    const currentId = data[currentPerson].id;

    if (currentOrder != "Nombres") arcGroup.selectAll('path')
            .attr('fill', d => ((currentId >= d.startId) && (currentId <= d.endId)) ? 'red' : 'white');

    try {
      switchCaption(currentOrder);
    }
    catch(error) {
      console.log(error);
      console.log(currentPerson);
    }
  };

  svg.call(
    d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
  );

  function switchCaption(currentOrder) {
    let outputCaption;
    switch (currentOrder) {
      case "Edad":
        const ageCount = countAndColour(currentPerson, "Edad");
        outputCaption = `${ageCount} personas fallecidas de entre ${data[currentPerson]["Tramo de edad"]} años`;
        document.getElementById('caption').innerHTML = outputCaption;
        // para este caso no hay que usar la funcion estandar de coloramiento
        break;
      case "Causa de fallecimiento":
        const deathCause = data[currentPerson]["Causa de fallecimiento"];
        const causeCount = countAndColour(currentPerson, "Causa de fallecimiento");
        if (deathCause === "Muerte presunta (Desaparecido)") outputCaption = `${causeCount} personas quedaron catalogadas como ${deathCause}`;
        else outputCaption = `${causeCount} personas fallecieron a causa de ${deathCause}`;
        document.getElementById('caption').innerHTML = outputCaption;
        break;
      case "Ciudad":
        const deathPlace = data[currentPerson]["Ciudad"];
        const deathCount = countAndColour(currentPerson, "Ciudad");
        outputCaption = `${deathCount} personas fallecieron en ${deathPlace}`;
        document.getElementById('caption').innerHTML = outputCaption;
        break;
      case "RegiÃ³n":
        const deathRegion = data[currentPerson]["RegiÃ³n"];
        const regionCount = countAndColour(currentPerson, "RegiÃ³n");
        outputCaption = `${regionCount} personas fallecieron en la ${deathRegion}`;
        document.getElementById('caption').innerHTML = outputCaption;
        break;
      case "Género":
        const deathGender = data[currentPerson]["Género"];
        const genderCount = countAndColour(currentPerson, "Género");
        deathGender === 'Masculino'? outputCaption = `${genderCount} hombres fallecieron`: outputCaption = `${genderCount} mujeres fallecieron`;
        document.getElementById('caption').innerHTML = outputCaption;
        break;
      default:
        countAndColour(currentPerson, "Nombres");
        const age = parseFloat(data[currentPerson]["Edad"].replace(',','.'));
        const ageString = age > 1 ? `${age} años` : age === 1 ? `${age} año` : `${Math.ceil(age * 12)} meses`;
        const urlName = `${data[currentPerson]["Nombres"]} ${data[currentPerson]["Apellidos"]}`.split(" ").map(s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(new RegExp(/Ã±/g),"n")).join("-");
        const upperText = `<a href= "https://interactivo.latercera.com/memorial-27F/${urlName}" style="color:white">${data[currentPerson]['Nombres']} ${data[currentPerson]['Apellidos']}</a>`
        const bottomText = `${ageString}, ${data[currentPerson]["Ciudad"]}. ${data[currentPerson]["RegiÃ³n"]}.`
        document.getElementById('caption').innerHTML = `${upperText} <br> ${bottomText}`;
    }

    return outputCaption;
  }

  function parseAgeRange(ageRange) {
    return [Number(ageRange.substring(0,2)), Number(ageRange.substring(ageRange.length-3,ageRange.length))];
  }

  function countAndColour(currentPerson, key) {
    if (key == "Nombres") key = "id";
    const categoryValue = data[currentPerson][key];
    let categoryCount = 0;

    group.selectAll('line')
          .transition()
          .duration(300)
          // CHANGE OPACITY WHEN
          // .attr('opacity', d => {
          //   switch (key) {
          //     case 'Edad':
          //       let ageRange = parseAgeRange(data[currentPerson]['Tramo de edad']);
          //       if (Number(d[key]) >= ageRange[0] && Number(d[key]) <= ageRange[1]) {
          //         categoryCount++;
          //         return 1;
          //       }
          //       return .5;
          //     default:
          //       if (d[key] == categoryValue) {
          //         categoryCount++;
          //         return 1;
          //       }
          //       return .5;
          //   }
          // });
          .attr('stroke', d => {
            switch (key) {
              case 'Edad':
                let ageRange = parseAgeRange(data[currentPerson]['Tramo de edad']);
                if (Number(d[key]) >= ageRange[0] && Number(d[key]) <= ageRange[1]) {
                  categoryCount++;
                  return 'red';
                }
                return 'white';
              default:
                if (d[key] == categoryValue) {
                  categoryCount++;
                  return 'red';
                }
                return 'white';
            }
          });

    matrixGroup.selectAll('.glyph')
                .transition()
                .duration(300)
                .attr('opacity', d => {
                  switch (key) {
                    case 'Edad':
                      let ageRange = parseAgeRange(data[currentPerson]['Tramo de edad']);
                      if (Number(d[key]) >= ageRange[0] && Number(d[key]) <= ageRange[1]) return 1;
                      else return .5;
                    default:
                      if (d[key] === categoryValue) return 1;
                      else return .5;
                  }
                });

    return categoryCount;
  }

})

document.getElementById('nameButton').addEventListener('click', (e) => {
  orderBy('Apellidos');
  reorder();
  arcBy('Apellidos');
  currentOrder = "Apellidos";
});

document.getElementById('genderButton').addEventListener('click', (e) => {
  orderBy('Género');
  reorder();
  arcBy('Género');
  currentOrder = "Género";
});

document.getElementById('ageButton').addEventListener('click', (e) => {
  orderBy('Edad');
  reorder();
  arcBy('Tramo de edad');
  currentOrder = "Edad";
});

document.getElementById('causeButton').addEventListener('click', (e) => {
  orderBy('Causa de fallecimiento');
  reorder();
  arcBy('Causa de fallecimiento');
  currentOrder = "Causa de fallecimiento";
});

document.getElementById('cityButton').addEventListener('click', (e) => {
  orderBy('Ciudad');
  reorder();
  arcBy('Ciudad');
  currentOrder = "Ciudad";
});

document.getElementById('regionButton').addEventListener('click', (e) => {
  orderBy('RegiÃ³n');
  reorder();
  arcBy('RegiÃ³n');
  currentOrder = "RegiÃ³n";
});

// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// https://stackoverflow.com/questions/1418050/string-strip-for-javascript
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}