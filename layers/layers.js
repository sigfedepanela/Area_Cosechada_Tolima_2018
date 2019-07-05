var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Limite__Departamental_1 = new ol.format.GeoJSON();
var features_Limite__Departamental_1 = format_Limite__Departamental_1.readFeatures(json_Limite__Departamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite__Departamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite__Departamental_1.addFeatures(features_Limite__Departamental_1);var lyr_Limite__Departamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite__Departamental_1, 
                style: style_Limite__Departamental_1,
                title: '<img src="styles/legend/Limite__Departamental_1.png" /> Limite__Departamental'
            });var format_reaCosechadaenCaaPaneleraHectareas_2 = new ol.format.GeoJSON();
var features_reaCosechadaenCaaPaneleraHectareas_2 = format_reaCosechadaenCaaPaneleraHectareas_2.readFeatures(json_reaCosechadaenCaaPaneleraHectareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCosechadaenCaaPaneleraHectareas_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_reaCosechadaenCaaPaneleraHectareas_2.addFeatures(features_reaCosechadaenCaaPaneleraHectareas_2);var lyr_reaCosechadaenCaaPaneleraHectareas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaCosechadaenCaaPaneleraHectareas_2, 
                style: style_reaCosechadaenCaaPaneleraHectareas_2,
    title: 'Área Cosechada en Caña Panelera (Hectareas)<br />\
    <img src="styles/legend/reaCosechadaenCaaPaneleraHectareas_2_0.png" />  10 - 170 <br />\
    <img src="styles/legend/reaCosechadaenCaaPaneleraHectareas_2_1.png" />  170 - 350 <br />\
    <img src="styles/legend/reaCosechadaenCaaPaneleraHectareas_2_2.png" />  350 - 660 <br />\
    <img src="styles/legend/reaCosechadaenCaaPaneleraHectareas_2_3.png" />  660 - 1120 <br />\
    <img src="styles/legend/reaCosechadaenCaaPaneleraHectareas_2_4.png" />  1120 - 2160 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite__Departamental_1.setVisible(true);lyr_reaCosechadaenCaaPaneleraHectareas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limite__Departamental_1,lyr_reaCosechadaenCaaPaneleraHectareas_2];
lyr_Limite__Departamental_1.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REN.(Ton/H': 'REN.(Ton/H', 'AÑO': 'AÑO', });
lyr_reaCosechadaenCaaPaneleraHectareas_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS(Ha)': 'A.COS(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', });
lyr_Limite__Departamental_1.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REN.(Ton/H': 'TextEdit', 'AÑO': 'Range', });
lyr_reaCosechadaenCaaPaneleraHectareas_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', });
lyr_Limite__Departamental_1.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REN.(Ton/H': 'inline label', 'AÑO': 'inline label', });
lyr_reaCosechadaenCaaPaneleraHectareas_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', });
lyr_reaCosechadaenCaaPaneleraHectareas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});