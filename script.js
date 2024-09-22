let selectedVillagers = [];

const HTML_BUTTON_ADD = '<button class="btn-add-villager">Add</button>';
const HTML_BUTTON_REMOVE = '<button class="btn-remove-villager">Remove</button>';

const BEST = 5;
const BETTER = 3;
const OK = 2;
const POOR = 1;
const BAD = 0;

const BAD_COMPATIBILITY = 'Incompatible';
const AVERAGE_COMPATIBILITY = 'Normal';
const GOOD_COMPATIBILITY = 'Friendly';

const PERSONALITY_MATRIX_INDEX = {
    'Normal':0,
    'Lazy':1,
    'Peppy':2,
    'Jock':3,
    'Snooty':4,
    'Cranky':5,
    'Smug':6,
    'Big sister':7
};
const PERSONALITY_MATRIX = [
    [OK,POOR,POOR,BETTER,BEST,OK,BEST,BETTER],
    [POOR,BEST,BETTER,POOR,OK,BETTER,OK,BEST],
    [POOR,BETTER,BEST,BEST,BETTER,POOR,OK,OK],
    [BETTER,POOR,BEST,BEST,POOR,OK,BETTER,OK],
    [BEST,OK,BETTER,POOR,OK,BEST,BETTER,POOR],
    [OK,BETTER,POOR,OK,BEST,BEST,POOR,BETTER],
    [BEST,OK,OK,BETTER,BETTER,POOR,BEST,POOR],
    [BETTER,BEST,OK,OK,POOR,BETTER,POOR,BEST]];

const SPECIES_BEST_AFFINITIES = [
    ['Bull', 'Cow'], ['Bear', 'Bear cub'],['Bear', 'Cub'], ['Cat', 'Tiger'],
    ['Dog', 'Wolf'], ['Goat', 'Sheep'], ['Kangaroo', 'Koala']
];

const SPECIES_BETTER_AFFINITIES = [
    ['Deer', 'Horse'], ['Hamster', 'Squirrel', 'Mouse'] 
];

const SPECIES_POOR_AFFINITIES = [
    ['Cat', 'Mouse', 'Hamster'], ['Dog', 'Gorilla', 'Monkey'], ['Sheep', 'Wolf']
];

const FIRE_SIGNS = ['Aries', 'Leo', 'Sagittarius'];
const EARTH_SIGNS = ['Taurus', 'Virgo', 'Capricorn'];
const AIR_SIGNS = ['Gemini', 'Libra', 'Aquarius'];
const WATER_SIGNS = ['Cancer','Scorpio','Pisces'];

$(onReady);

function onReady() {
    initializeVillagerMenu();

    $('#btn-name').on('click', function(event){
        event.preventDefault();
        let names = $('#by-name').val();
        displaySearchResults(filterByName(names));
    });
    $('#btn-search-clear').on('click', function(event){
        $('#in-search').val('');
        $('#div-search-results').empty();
    });
    $('#btn-filter').on('click', function(event){
        event.preventDefault();
        displaySearchResults(filterByCriteria());
    });
    $('#btn-filter-clear').on('click', function(event){
        // uncheck stuff?
        $('#div-search-results').empty();
    });
    $('#div-search-results').on('click', '.btn-add-villager', addToCompatibility);
    $('#div-selected').on('click', '.btn-remove-villager', removeFromCompatibility);
}

function initializeVillagerMenu() {
    for (let villager of allVillagers) {
        let villagerOption = $(`
            <option value="${villager.name}">${villager.name}</option>
        `);
        $('#by-name').append(villagerOption);
    }
}

function filterByName(names) {
    let results = [];
    for (let v of allVillagers){
        for (let n of names){
            if (v.name.includes(n)) {
                results.push(v);
            }
        }
    }
    return results;
}

function filterByCriteria() {
    let notIncompatible = document.querySelector('#no-bad').checked;
    let onlyCompatible = document.querySelector('#only-good').checked;

    let results = [];
    for (let villager of allVillagers) {
        let allow = true;
        for(let selected of selectedVillagers) {
            if (selected.name === villager.name) {
                allow = false;
                continue;
            }

            let score = getCompatibilityScore(villager, selected);
            if ((score.display === BAD_COMPATIBILITY && notIncompatible) ||
                (!(score.display === GOOD_COMPATIBILITY) && onlyCompatible)) {
                allow = false;
                break;
            }
        }
        if (allow) {
            results.push(villager);
        } else {
            console.log("Incompatible villager: " + villager.name);
        }
    }
    return results;
}

function displaySearchResults(results) {
    $('#div-search-results').empty();
    for (item of results){
        let favColors = item.fav_color2 ? `${item.fav_color1} & ${item.fav_color2}` : item.fav_color1;
        let favStyles = item.fav_style2 ? `${item.fav_style1} & ${item.fav_style2}` : item.fav_style1;
        let villagerDiv = $(`
            <div class="div-villager" id="div-${item.name}">
                <h3 class="text-center">${item.name}</h3>
                <img class="img-villager" src="${item.image_url}" alt="Image of ${item.name}" />
                <div class="villager-details">
                <dl>
                    <dt>Birthday</dt>
                    <dd>${item.birthday}</dd>
                    <dt>Sign</dt>
                    <dd>${item.sign}</dd>
                    <dt>Personality</dt>
                    <dd>${item.personality} (${item.sub_personality})</dd>
                    <dt>Hobby</dt>
                    <dd>${item.hobby}</dd>
                    <dt>Catchphrase</dt>
                    <dd>${item.catchphrase}</dd>
                    <dt>Fav colors</dt>
                    <dd>${favColors}</dd>
                    <dt>Fav styles</dt>
                    <dd>${favStyles}</dd>
                </dl>
                </div>
                <div class="btn-div text-center">
                    ${HTML_BUTTON_ADD}
                </div>
            </div>
        `);
        $('#div-search-results').append(villagerDiv);
        villagerDiv.data('villager', item);
    }
}

function addToCompatibility(){
    let $thisButton = $(this);
    let $buttonDiv = $thisButton.closest('.btn-div');

    // Remove from results & swap buttons
    let $villagerDiv = $thisButton.closest('.div-villager');
    $villagerDiv.detach();
    $thisButton.remove();
    $buttonDiv.append(HTML_BUTTON_REMOVE);

    // Add to selected array & display if not already there
    let villager = $villagerDiv.data('villager');
    let index = selectedVillagers.findIndex( v => v.name === villager.name);
    if (index < 0){
        selectedVillagers.push(villager);
        selectedVillagers.sort( (v1, v2) => (v1.name > v2.name) ? 1 : -1);
        $('#div-selected').append($villagerDiv);
        // Handle display only if adding new
        showHideSelectedSearch();
        showHideSelectedSection();
        showHideCompatibilityMatrix();
    }
}

function removeFromCompatibility(){
    let $thisButton = $(this);

    // Get villager data
    let $villagerDiv = $thisButton.closest('.div-villager');
    let villager = $villagerDiv.data('villager');

    // Remove from selected section
    $thisButton.closest('.div-villager').remove();

    // Remove from selected array
    let index = selectedVillagers.findIndex( v => v.name === villager.name);
    selectedVillagers.splice(index, 1);

    // Handle display
    showHideSelectedSearch();
    showHideSelectedSection();
    showHideCompatibilityMatrix();
}

function showHideSelectedSearch() {
    if (selectedVillagers.length === 10){
        $('#form-search').addClass('invisible');
        $('#div-search-results').empty();
    } else if (selectedVillagers.length < 10) {
        $('#form-search').removeClass('invisible');
    }
}

function showHideSelectedSection() {
    if (selectedVillagers.length === 0){
        $('#div-selected').addClass('invisible');
    } else if (selectedVillagers.length === 1) {
        $('#div-selected').removeClass('invisible');
    }
}

function showHideCompatibilityMatrix() {
    if (selectedVillagers.length < 2){
        $('#tbl-matrix').addClass('d-none');
        $('#intro-text').removeClass('invisible');
        $('#summary-text').addClass('invisible');
    } else if (selectedVillagers.length === 2) {
        $('#tbl-matrix').removeClass('d-none');
        $('#intro-text').addClass('invisible');
        $('#summary-text').removeClass('invisible');
    }

    if (selectedVillagers.length >= 2) {
        setupMatrixTable();
    }
}

function setupMatrixTable() {
    let $tableHeader = $('#tbl-head-matrix');
    let $tableBody = $('#tbl-body-matrix');

    $tableHeader.empty();
    $tableBody.empty();

    let $headerRow = $('<tr><th class="text-center align-middle" scope="col">Name</th>');
    $tableHeader.append($headerRow);

    let friendlyCount = 0;
    let incompatibleCount = 0;
    for (let villager of selectedVillagers) {
        $headerRow.append(`<th scope="col">
            <div class="text-center villager-header">
                ${villager.name}
                <div class="details">
                    <div>${villager.personality}, ${villager.species},</div>
                    <div>${getElementFromSign(villager.sign)}, ${villager.sign}</div>
                </div>
            </div>
        </th>`);

        // Setup the body row for this villager
        let $bodyRow = $(`<tr>
            <th scope="row">
                <div class="text-center villager-header">
                    ${villager.name}
                    <div class="details">
                        <div>${villager.personality}, ${villager.species},</div>
                        <div>${getElementFromSign(villager.sign)}, ${villager.sign}</div>
                    </div>
                </div>
            </th>
        </tr>`);
        for (let subVillager of selectedVillagers) {
            if (subVillager.name !== villager.name) {
                let score = getCompatibilityScore(villager, subVillager);
                let styleClass = 'normal-compatibility';
                if (score.display === GOOD_COMPATIBILITY) {
                    styleClass = 'good-compatibility';
                    friendlyCount += 1;
                } else if (score.display === BAD_COMPATIBILITY) {
                    styleClass = 'bad-compatibility';
                    incompatibleCount += 1;
                }
                $bodyRow.append(`
                    <td>
                        <div class="text-center score ${styleClass}">
                            <div>${score.display}</div>
                            <div>Total = ${score.total}</div>
                            <div>
                                <span>P:${score.personality}</span>
                                <span>E:${score.element}</span>
                                <span>S:${score.species}</span>
                            </div>
                        </div>
                    </td>`);
            } else {
                // no compatibility with yourself
                $bodyRow.append('<td class="text-center align-middle score self">---</td>');
            }
        }
        // Add the row for this villager
        $tableBody.append($bodyRow);
        $('#summary-text').text(`Overall there are ${friendlyCount/2} friendly pairs 
            and ${incompatibleCount/2} incompatible pairs.`);
    }
}

function getCompatibilityScore(villager1, villager2) {
    let score = {
        total: 0,
        element: 0,
        species: 0,
        personality: 0
    }

    score.element = getElementScore(villager1.sign, villager2.sign);
    score.species = getSpeciesScore(villager1.species, villager2.species);
    score.personality = getPersonalityScore(villager1.personality, villager2.personality);
    score.total += score.species + score.element + score.personality;
    
    if ((score.species === BEST   && score.total >= 9) || 
        (score.species === BETTER && score.total >= 10) ||
        (score.species === OK     && score.total >= 11) ) {
        score.display = GOOD_COMPATIBILITY;
    } else if (score.total <= 3) {
        score.display = BAD_COMPATIBILITY;
    } else {
        score.display = AVERAGE_COMPATIBILITY;
    }
    return score;
}

function getElementScore(sign1, sign2) {
    const FIRE_WATER = ['Fire', 'Water'];
    const EARTH_AIR = ['Earth', 'Air'];

    let element1 = getElementFromSign(sign1);
    let element2 = getElementFromSign(sign2);

    if (element1 === element2) {
        return BEST;
    } else if ((FIRE_WATER.includes(element1) &&  FIRE_WATER.includes(element2)) ||
            (EARTH_AIR.includes(element1) && EARTH_AIR.includes(element2))) {
        return BAD;
    } else {
        return BETTER;
    }
}

function getElementFromSign(sign) {
    if (FIRE_SIGNS.includes(sign)) {
        return 'Fire';
    } else if (EARTH_SIGNS.includes(sign)) {
        return 'Earth';
    } else if (WATER_SIGNS.includes(sign)) {
        return 'Water';
    } else if (AIR_SIGNS.includes(sign)) {
        return 'Air';
    } else {
        console.log('Error: Element unknown for sign=' + sign);
        return 'Unknown';
    }
}

function getSpeciesScore(species1 , species2) {
    if (species1 === species2) {
        return BETTER;
    }

    for (array of SPECIES_BEST_AFFINITIES) {
        if (array.includes(species1) && array.includes(species2)) {
            return BEST;
        }
    }

    for (array of SPECIES_BETTER_AFFINITIES) {
        if (array.includes(species1) && array.includes(species2)) {
            return BEST;
        }
    }

    // Must do this after BEST/BETTER
    for (array of SPECIES_POOR_AFFINITIES) {
        if (array.includes(species1) && array.includes(species2)) {
            return BAD;
        }
    }

    return OK;
}

function getPersonalityScore(personality1, personality2) {
    let i = PERSONALITY_MATRIX_INDEX[personality1];
    let j = PERSONALITY_MATRIX_INDEX[personality2];
    return PERSONALITY_MATRIX[i][j];
}
