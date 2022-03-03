const poppuyContainer = document.querySelector('.popupp-Container');

const popupps = [
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featured_image: '',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
];

const createPopuppElement = ({
  name,
  description,
  featuredVmage,
  technologies,
  linkVersion,
  linkSource,
}) => {
  const popuppDiv = document.createElement('div');

  const headerPopupp = document.createElement('div');
  headerPopupp.classList.add('modal-header');

  const popuppName = document.createElement('h3');

  const popuppDivImgPar = document.createElement('div');
  popuppDivImgPar.classList.add('modal-body');

  const popuppDescription = document.createElement('p');
  popuppDescription.classList.add('paragraph-popupp');

  const popuppImage = document.createElement('img');
  popuppImage.src = './Images/Snapshoot.svg';

  const popuppTech = document.createElement('li');

  const divButtons = document.createElement('div');
  divButtons.classList.add('buttons-popp');
  const popuppVersion = document.createElement('button');
  const popuppSource = document.createElement('button');

  popuppName.innerText = `${name}`;
  popuppDescription.innerText = `${description}`;
  popuppImage.innerText = `${featuredVmage}`;
  popuppTech.innerText = `${technologies}`;
  popuppVersion.innerText = `${linkVersion}`;
  popuppSource.innerText = `${linkSource}`;

  headerPopupp.append(
    popuppName,
  );

  popuppDivImgPar.append(
    popuppImage,
    popuppDescription,
  );

  divButtons.append(
    popuppVersion,
    popuppSource,
  );

  popuppDescription.append(
    divButtons,
  );

  popuppDiv.append(
    headerPopupp,
    popuppTech,
    popuppDivImgPar,
  );

  poppuyContainer.appendChild(popuppDiv);
};

popupps.forEach(createPopuppElement);
