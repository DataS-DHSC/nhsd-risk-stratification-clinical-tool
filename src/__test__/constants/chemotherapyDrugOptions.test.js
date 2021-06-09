import { chemotherapyDrugOptions } from '../../constants/forms-metadata/qcovid/chemotherapyDrugOptions';

describe('Handles sorting and display of the cancer drugs', () => {
  it('Collects the cancer drugs in the correct order', () => {
    expect(chemotherapyDrugOptions()).toEqual([
      {
        label: '',
        options: [
          {
            label: 'No chemotherapy in the last 12 months',
            name: 'no-chemotherapy-in-the-last-12-months',
          },
        ],
      },
      {
        label: 'Group C - Very highly immunosuppressive drugs',
        options: [
          {
            label: 'All ALL / AML regimens',
            name: 'all-aml-regimens',
          },
          {
            label: 'BEP',
            name: 'bep',
          },
          {
            label:
              'Highly immunosuppressive chemotherapy (e.g. FluDAP, high dose Methotrexate & Cytarabine)',
            name: 'highly-immunosuppressive-chemotherapy',
          },
          {
            label: 'Trifuradine/Tipracil',
            name: 'trifuradine-tipracil',
          },
        ],
      },
      {
        label: 'Group B - Highly immunosuppressive drugs',
        options: [
          {
            label: 'ABVD',
            name: 'abvd',
          },
          {
            label: 'Anthracycline based regimens',
            name: 'anthracycline-based-regimens',
          },
          {
            label: 'Asparaginase based regimens',
            name: 'asparaginase-based-regimens',
          },
          {
            label: 'BEACOPP',
            name: 'beacopp',
          },
          {
            label: 'Bendamustine',
            name: 'bendamustine',
          },
          {
            label: 'Brentuximab vedotin',
            name: 'brentuximab-vedotin',
          },
          {
            label: 'BTK inhibitors',
            name: 'btk-inhibitors',
          },
          {
            label: 'Cabazitaxel',
            name: 'cabazitaxel',
          },
          {
            label: 'Carboplatin based regimens',
            name: 'carboplatin-based-regimens',
          },
          {
            label: 'CHOP',
            name: 'chop',
          },
          {
            label: 'Chorambucil',
            name: 'chorambucil',
          },
          {
            label: 'Cladrabine',
            name: 'cladrabine',
          },
          {
            label: 'CMF',
            name: 'cmf',
          },
          {
            label: 'CVAD',
            name: 'cvad',
          },
          {
            label: 'Cyclophosphamide/Fludarabine combinations',
            name: 'cyclophosphamide-fludarabine-combinations',
          },
          {
            label: 'Dacarbazine based regimens',
            name: 'dacarbazine-based-regimens',
          },
          {
            label: 'Daratumumab',
            name: 'daratumumab',
          },
          {
            label: 'DHAP',
            name: 'dhap',
          },
          {
            label: 'ESHAP',
            name: 'eshap',
          },
          {
            label: 'Etoposide based regimens',
            name: 'etoposide-based-regimens',
          },
          {
            label: 'FEC',
            name: 'fec',
          },
          {
            label: 'GDP',
            name: 'gdp',
          },
          {
            label: 'Gemcitabine',
            name: 'gemcitabine',
          },
          {
            label: 'ICE',
            name: 'ice',
          },
          {
            label: 'Ifophosphamide based regimens',
            name: 'ifophosphamide-based-regimens',
          },
          {
            label: 'IMIDs',
            name: 'imids',
          },
          {
            label: 'Irinotecan and Oxaliplatin based regimens',
            name: 'irinotecan-and-oxaliplatin-based-regimens',
          },
          {
            label: 'JAK inhibitors',
            name: 'jak-inhibitors',
          },
          {
            label: 'Liposomal doxorubicin',
            name: 'liposomal-doxorubicin',
          },
          {
            label: 'Lomustine',
            name: 'lomustine',
          },
          {
            label: 'Mogalizumab',
            name: 'mogalizumab',
          },
          {
            label: 'MVAC',
            name: 'mvac',
          },
          {
            label: 'Nab-paclitaxel',
            name: 'nab-paclitaxel',
          },
          {
            label: 'Obinutuzumab',
            name: 'obinutuzumab',
          },
          {
            label: 'Pentostatin',
            name: 'pentostatin',
          },
          {
            label: 'PI3Kinase inhibitors',
            name: 'pi3kinase-inhibitors',
          },
          {
            label: 'Proteosome inhibitors',
            name: 'proteosome-inhibitors',
          },
          {
            label: 'Rituximab',
            name: 'rituximab',
          },
          {
            label: 'Taxane – 3 weekly',
            name: 'taxane-3-weekly',
          },
          {
            label: 'Temozolomide',
            name: 'temozolomide',
          },
          {
            label: 'Topotecan',
            name: 'topotecan',
          },
          {
            label: 'Trastuzumab-emtansine',
            name: 'trastuzumab-emtansine',
          },
          {
            label: 'Ventoclax',
            name: 'ventoclax',
          },
        ],
      },
      {
        label:
          'Group A - Immunosuppressants or agents used with chemotherapy regimens',
        options: [
          {
            label: '5FU single agent',
            name: '5fu-single-agent',
          },
          {
            label: 'Abiraterone',
            name: 'abiraterone',
          },
          {
            label: 'Anagrelide',
            name: 'anagrelide',
          },
          {
            label: 'Aromatase inhibitors',
            name: 'aromatase-inhibitors',
          },
          {
            label: 'Atezolizumab single agent',
            name: 'single-agent-atezolizumab',
          },
          {
            label: 'Bevacizumab single agent',
            name: 'bevacizumab-single-agent',
          },
          {
            label: 'Bisphosphonate',
            name: 'bisphosphonate',
          },
          {
            label: 'Busulfan ',
            name: 'busulfan',
          },
          {
            label: 'Capecitabine single agent',
            name: 'capecitabine-single-agent',
          },
          {
            label: 'CDK4/6 inhibitors',
            name: 'cdk4-6-inhibitors',
          },
          {
            label: 'Cetuximab',
            name: 'cetuximab',
          },
          {
            label: 'Cisplatin based regimens',
            name: 'cisplatin-based-regimens',
          },
          {
            label: 'Denosumab ',
            name: 'denosumab',
          },
          {
            label: 'Durvalumab',
            name: 'durvalumab',
          },
          {
            label: 'Enzalutamide',
            name: 'enzalutamide',
          },
          {
            label: 'Fulvestrant',
            name: 'fulvestrant',
          },
          {
            label: 'Hydroxycarbamide',
            name: 'hydroxycarbamide',
          },
          {
            label: 'Interferon (all formulations)',
            name: 'interferon-all-formulations',
          },
          {
            label: 'Ipilimumab',
            name: 'ipilimumab',
          },
          {
            label: 'Lenvatinib',
            name: 'lenvatinib',
          },
          {
            label: 'Methotrexate',
            name: 'methotrexate',
          },
          {
            label: 'Mitomycin C',
            name: 'mitomycin-c',
          },
          {
            label: 'mTOR inhibitors',
            name: 'mtor-inhibitors',
          },
          {
            label: 'Nivolumab single agent',
            name: 'nivolumab',
          },
          {
            label: 'Panitumumab',
            name: 'panitumumab',
          },
          {
            label: 'PARP inhibitors',
            name: 'parp-inhibitors',
          },
          {
            label: 'Pembrolizumab single agent',
            name: 'pembrolizumab',
          },
          {
            label: 'Pemetrexed',
            name: 'pemetrexed',
          },
          {
            label: 'Raltitrexed',
            name: 'raltitrexed',
          },
          {
            label: 'Regorafinib',
            name: 'regorafinib',
          },
          {
            label: 'Sorafenib',
            name: 'sorafenib',
          },
          {
            label: 'Tamoxifen',
            name: 'tamoxifen',
          },
          {
            label: 'Taxane – weekly',
            name: 'taxane-weekly',
          },
          {
            label: 'Trastuzumab +/- pertuzumab',
            name: 'trastuzumab-pertuzumab',
          },
          {
            label: 'Tyrosine kinase inhibitors (including ALK &/or ROS)',
            name: 'tyrosine-kinase-inhibitors-including-alk',
          },
        ],
      },
    ]);
  });
});
