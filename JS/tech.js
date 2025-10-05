/**
 * Data structure holding all dynamic content for each contaminant.
 * The keys ('lead', 'giardia', etc.) correspond to the 'data-contaminant' attributes in the HTML.
 */
const contaminantData = {
    lead: {
        title: "Lead",
        text: "The most common sources of lead in drinking water are lead pipes, faucets, and plumbing fixtures. Certain pipes that carry drinking water from the water source to the home may contain lead. Household plumbing fixtures, welding solder, and pipe fittings made prior to 1986 may also contain lead.",
        imageSrc: "images/bluebactiria.png" // Placeholder for Lead image
    },
    giardia: {
        title: "Giardia",
        text: "Giardia is a tiny parasite (germ) that causes the diarrheal disease giardiasis. Giardia is found on surfaces or in soil, food, or water that has been contaminated with feces (poop) from infected people or animals. You can get giardiasis if you swallow Giardia germs.",
        imageSrc: "images/voiletbactiria.png" // Placeholder for Giardia image
    },
    cryptosporidium: {
        title: "Cryptosporidium",
        text: "Cryptosporidium is a parasite that causes a diarrheal illness called cryptosporidiosis (the parasite and the disease are often called “Crypto”). Crypto is a common waterborne illness and is the most common cause of recreational water illness in the United States.",
        imageSrc: "images/dotvoiletbactiria.png" // Placeholder for Cryptosporidium image
    },
    chlorine: {
        title: "Chlorine",
        text: "CHLORINE AND CHLORAMINE ARE THE MAJOR DISINFECTANTS USED IN PUBLIC WATER SYSTEMS. You can find out whether there is a disinfectant in your water, what kind of disinfectant is used, and how well your utility has followed the rules about disinfection by obtaining a copy of your utility’s consumer confidence report.",
        imageSrc: "images/bluebactiria.png" // Placeholder for Chlorine image
    },
    microplastics: {
        title: "Microplastics",
        text: "Plastic is the most prevalent type of marine debris found in our ocean and Great Lakes. Plastic debris can come in all shapes and sizes, but those that are less than five millimeters in length (or about the size of a sesame seed) are called “microplastics.”",
        imageSrc: "images/linebactiria.png" // Placeholder for Microplastics image
    },
    ecoli: {
        title: "Escherichia coli",
        text: "Escherichia coli is a Gram-negative, facultative anaerobic, rod-shaped, coliform bacterium of the genus Escherichia that is commonly found in the lower intestine of warm-blooded organisms... Most E. coli strains are harmless, but some serotypes... can cause serious food poisoning...",
        imageSrc: "images/smallvoiletbactiria.png" // Placeholder for E.coli image
    },
    bpa: {
        title: "Bisphenol A (BPA)",
        text: "Bisphenol A(BPA) is a chemical compound primarily used in the manufacturing of various plastics. It is a colourless solid which is soluble in most common organic solvents, but has very poor solubility in water. BPA is produced on an industrial scale by the condensation of phenol and acetone, and has a global production scale which is expected to reach 10 million tonnes in 2022.",
        imageSrc: "images/voiletbactiria.png"// Placeholder for BPA image
    }
};

/**
 * Updates the content area based on the selected contaminant key.
 * @param {string} contaminantKey - The key corresponding to the data in contaminantData.
 */
function updateContaminantDetails(contaminantKey) {
    const data = contaminantData[contaminantKey];
    
    if (!data) return; // Exit if data is not found
    
    // Update dynamic elements
    document.getElementById('detail-title').textContent = data.title;
    document.getElementById('detail-text').innerHTML = data.text; // Use innerHTML to preserve citations
    document.getElementById('detail-micro-image').src = data.imageSrc;
    document.getElementById('detail-micro-image').alt = `Microscopic view of ${data.title}`;
    
    // Update active class on navigation links
    document.querySelectorAll('.contaminant-nav__link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-contaminant') === contaminantKey) {
            link.classList.add('active');
        }
    });
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Set up event listeners for navigation links
    document.querySelectorAll('.contaminant-nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const contaminant = e.target.getAttribute('data-contaminant');
            updateContaminantDetails(contaminant);
        });
    });
    
    // 2. Load initial content (Lead)
    // The active class is already set on 'lead' in the HTML
    updateContaminantDetails('lead');
});