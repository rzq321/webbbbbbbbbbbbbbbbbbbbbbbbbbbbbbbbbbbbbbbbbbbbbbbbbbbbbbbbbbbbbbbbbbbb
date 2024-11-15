ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.245177, -7.430321, 109.269860, -7.417199]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LahanKosongGrahaTimur_1 = new ol.format.GeoJSON();
var features_LahanKosongGrahaTimur_1 = format_LahanKosongGrahaTimur_1.readFeatures(json_LahanKosongGrahaTimur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LahanKosongGrahaTimur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanKosongGrahaTimur_1.addFeatures(features_LahanKosongGrahaTimur_1);
var lyr_LahanKosongGrahaTimur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanKosongGrahaTimur_1, 
                style: style_LahanKosongGrahaTimur_1,
                popuplayertitle: "Lahan Kosong Graha Timur",
                interactive: true,
                title: '<img src="styles/legend/LahanKosongGrahaTimur_1.png" /> Lahan Kosong Graha Timur'
            });
var format_Kuburan_2 = new ol.format.GeoJSON();
var features_Kuburan_2 = format_Kuburan_2.readFeatures(json_Kuburan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kuburan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_2.addFeatures(features_Kuburan_2);
var lyr_Kuburan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_2, 
                style: style_Kuburan_2,
                popuplayertitle: "Kuburan",
                interactive: true,
                title: '<img src="styles/legend/Kuburan_2.png" /> Kuburan'
            });
var format_BatasRT_3 = new ol.format.GeoJSON();
var features_BatasRT_3 = format_BatasRT_3.readFeatures(json_BatasRT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasRT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_3.addFeatures(features_BatasRT_3);
var lyr_BatasRT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_3, 
                style: style_BatasRT_3,
                popuplayertitle: "Batas RT",
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_3_0.png" /> RT 001/ RW 002<br />\
    <img src="styles/legend/BatasRT_3_1.png" /> RT 002/002<br />\
    <img src="styles/legend/BatasRT_3_2.png" /> RT 003/ RW 002<br />\
    <img src="styles/legend/BatasRT_3_3.png" /> RT 004 / RW 004<br />\
    <img src="styles/legend/BatasRT_3_4.png" /> RT 001 / RW 003<br />\
    <img src="styles/legend/BatasRT_3_5.png" /> RT 002/ RW 003<br />\
    <img src="styles/legend/BatasRT_3_6.png" /> RT 003/ RW 003<br />\
    <img src="styles/legend/BatasRT_3_7.png" /> RT 001 / RW 004<br />\
    <img src="styles/legend/BatasRT_3_8.png" /> RT 002 / RW 004<br />\
    <img src="styles/legend/BatasRT_3_9.png" /> RT 003 / RW 004<br />\
    <img src="styles/legend/BatasRT_3_10.png" /> RT 001 / RW 009<br />\
    <img src="styles/legend/BatasRT_3_11.png" /> RT 001 / RW 010<br />\
    <img src="styles/legend/BatasRT_3_12.png" /> RT 003 / RW 009<br />\
    <img src="styles/legend/BatasRT_3_13.png" /> RT 002 / RW 009<br />\
    <img src="styles/legend/BatasRT_3_14.png" /> RT 002 / RW 010<br />\
    <img src="styles/legend/BatasRT_3_15.png" /> RT 003 / RW 010<br />\
    <img src="styles/legend/BatasRT_3_16.png" /> RT 002 / RW 006<br />\
    <img src="styles/legend/BatasRT_3_17.png" /> RT 003 / RW 006<br />\
    <img src="styles/legend/BatasRT_3_18.png" /> RT 001 / RW 008<br />\
    <img src="styles/legend/BatasRT_3_19.png" /> RT 002/ RW 008<br />\
    <img src="styles/legend/BatasRT_3_20.png" /> RT 003 / RW 007<br />\
    <img src="styles/legend/BatasRT_3_21.png" /> RT 001 / RW 002<br />\
    <img src="styles/legend/BatasRT_3_22.png" /> RT 002 / RW 007<br />\
    <img src="styles/legend/BatasRT_3_23.png" /> RT 003 / RW 008<br />\
    <img src="styles/legend/BatasRT_3_24.png" /> RT 001 / RW 005<br />\
    <img src="styles/legend/BatasRT_3_25.png" /> RT 002 / RW 001<br />\
    <img src="styles/legend/BatasRT_3_26.png" /> RT 003 / RW 001<br />\
    <img src="styles/legend/BatasRT_3_27.png" /> RT 002 / rw 011<br />\
    <img src="styles/legend/BatasRT_3_28.png" /> RT 003 / RW 011<br />\
    <img src="styles/legend/BatasRT_3_29.png" /> RT 005 / RW 005<br />\
    <img src="styles/legend/BatasRT_3_30.png" /> RT 001 / RW 006<br />\
    <img src="styles/legend/BatasRT_3_31.png" /> RT 002 / RW 005<br />\
    <img src="styles/legend/BatasRT_3_32.png" /> RT 004 / RW 005<br />\
    <img src="styles/legend/BatasRT_3_33.png" /> RT 004 / RW 011<br />\
    <img src="styles/legend/BatasRT_3_34.png" /> RT 005 / RW 011<br />\
    <img src="styles/legend/BatasRT_3_35.png" /> Rt 001 / RW 011<br />\
    <img src="styles/legend/BatasRT_3_36.png" /> RT 004 / RW 001<br />\
    <img src="styles/legend/BatasRT_3_37.png" /> RT 03 / RT 001<br />\
    <img src="styles/legend/BatasRT_3_38.png" /> RT 005 / RW 001<br />\
    <img src="styles/legend/BatasRT_3_39.png" /> RT 001 / RW 011<br />\
    <img src="styles/legend/BatasRT_3_40.png" /> Rt 001 / RW 007<br />\
    <img src="styles/legend/BatasRT_3_41.png" /> <br />'
        });
var format_KaliBiru_4 = new ol.format.GeoJSON();
var features_KaliBiru_4 = format_KaliBiru_4.readFeatures(json_KaliBiru_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KaliBiru_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaliBiru_4.addFeatures(features_KaliBiru_4);
var lyr_KaliBiru_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaliBiru_4, 
                style: style_KaliBiru_4,
                popuplayertitle: "Kali Biru",
                interactive: true,
                title: '<img src="styles/legend/KaliBiru_4.png" /> Kali Biru'
            });
var format_KaliPutih_5 = new ol.format.GeoJSON();
var features_KaliPutih_5 = format_KaliPutih_5.readFeatures(json_KaliPutih_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KaliPutih_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaliPutih_5.addFeatures(features_KaliPutih_5);
var lyr_KaliPutih_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaliPutih_5, 
                style: style_KaliPutih_5,
                popuplayertitle: "Kali Putih",
                interactive: true,
                title: '<img src="styles/legend/KaliPutih_5.png" /> Kali Putih'
            });
var format_KaliGunem_6 = new ol.format.GeoJSON();
var features_KaliGunem_6 = format_KaliGunem_6.readFeatures(json_KaliGunem_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KaliGunem_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaliGunem_6.addFeatures(features_KaliGunem_6);
var lyr_KaliGunem_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaliGunem_6, 
                style: style_KaliGunem_6,
                popuplayertitle: "Kali Gunem",
                interactive: true,
                title: '<img src="styles/legend/KaliGunem_6.png" /> Kali Gunem'
            });
var format_Wilayah_Purwokerto_Wetan_poly_7 = new ol.format.GeoJSON();
var features_Wilayah_Purwokerto_Wetan_poly_7 = format_Wilayah_Purwokerto_Wetan_poly_7.readFeatures(json_Wilayah_Purwokerto_Wetan_poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wilayah_Purwokerto_Wetan_poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Purwokerto_Wetan_poly_7.addFeatures(features_Wilayah_Purwokerto_Wetan_poly_7);
var lyr_Wilayah_Purwokerto_Wetan_poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Purwokerto_Wetan_poly_7, 
                style: style_Wilayah_Purwokerto_Wetan_poly_7,
                popuplayertitle: "Wilayah_Purwokerto_Wetan_poly",
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Purwokerto_Wetan_poly_7.png" /> Wilayah_Purwokerto_Wetan_poly'
            });
var format_LAPANGNMARSPURWOKERTOWETAN_8 = new ol.format.GeoJSON();
var features_LAPANGNMARSPURWOKERTOWETAN_8 = format_LAPANGNMARSPURWOKERTOWETAN_8.readFeatures(json_LAPANGNMARSPURWOKERTOWETAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LAPANGNMARSPURWOKERTOWETAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAPANGNMARSPURWOKERTOWETAN_8.addFeatures(features_LAPANGNMARSPURWOKERTOWETAN_8);
var lyr_LAPANGNMARSPURWOKERTOWETAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAPANGNMARSPURWOKERTOWETAN_8, 
                style: style_LAPANGNMARSPURWOKERTOWETAN_8,
                popuplayertitle: "LAPANGN MARS PURWOKERTO WETAN",
                interactive: true,
                title: '<img src="styles/legend/LAPANGNMARSPURWOKERTOWETAN_8.png" /> LAPANGN MARS PURWOKERTO WETAN'
            });
var format_LapanganSmeconne_9 = new ol.format.GeoJSON();
var features_LapanganSmeconne_9 = format_LapanganSmeconne_9.readFeatures(json_LapanganSmeconne_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LapanganSmeconne_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganSmeconne_9.addFeatures(features_LapanganSmeconne_9);
var lyr_LapanganSmeconne_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganSmeconne_9, 
                style: style_LapanganSmeconne_9,
                popuplayertitle: "Lapangan Smeconne",
                interactive: true,
                title: '<img src="styles/legend/LapanganSmeconne_9.png" /> Lapangan Smeconne'
            });
var format_Jalan_10 = new ol.format.GeoJSON();
var features_Jalan_10 = format_Jalan_10.readFeatures(json_Jalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_10.addFeatures(features_Jalan_10);
var lyr_Jalan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_10, 
                style: style_Jalan_10,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_10.png" /> Jalan'
            });
var format_ALFAMART_11 = new ol.format.GeoJSON();
var features_ALFAMART_11 = format_ALFAMART_11.readFeatures(json_ALFAMART_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ALFAMART_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALFAMART_11.addFeatures(features_ALFAMART_11);
var lyr_ALFAMART_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALFAMART_11, 
                style: style_ALFAMART_11,
                popuplayertitle: "ALFAMART",
                interactive: true,
                title: '<img src="styles/legend/ALFAMART_11.png" /> ALFAMART'
            });
var format_KLENTENGHOKTEHBIOPURWOKERTO_12 = new ol.format.GeoJSON();
var features_KLENTENGHOKTEHBIOPURWOKERTO_12 = format_KLENTENGHOKTEHBIOPURWOKERTO_12.readFeatures(json_KLENTENGHOKTEHBIOPURWOKERTO_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KLENTENGHOKTEHBIOPURWOKERTO_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLENTENGHOKTEHBIOPURWOKERTO_12.addFeatures(features_KLENTENGHOKTEHBIOPURWOKERTO_12);
var lyr_KLENTENGHOKTEHBIOPURWOKERTO_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLENTENGHOKTEHBIOPURWOKERTO_12, 
                style: style_KLENTENGHOKTEHBIOPURWOKERTO_12,
                popuplayertitle: "KLENTENG HOK TEH BIO PURWOKERTO",
                interactive: true,
                title: '<img src="styles/legend/KLENTENGHOKTEHBIOPURWOKERTO_12.png" /> KLENTENG HOK TEH BIO PURWOKERTO'
            });
var format_TOKOEMAS_13 = new ol.format.GeoJSON();
var features_TOKOEMAS_13 = format_TOKOEMAS_13.readFeatures(json_TOKOEMAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TOKOEMAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOKOEMAS_13.addFeatures(features_TOKOEMAS_13);
var lyr_TOKOEMAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOKOEMAS_13, 
                style: style_TOKOEMAS_13,
                popuplayertitle: "TOKO EMAS",
                interactive: true,
                title: '<img src="styles/legend/TOKOEMAS_13.png" /> TOKO EMAS'
            });
var format_PASARWAGEPURWOKERTO_14 = new ol.format.GeoJSON();
var features_PASARWAGEPURWOKERTO_14 = format_PASARWAGEPURWOKERTO_14.readFeatures(json_PASARWAGEPURWOKERTO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PASARWAGEPURWOKERTO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASARWAGEPURWOKERTO_14.addFeatures(features_PASARWAGEPURWOKERTO_14);
var lyr_PASARWAGEPURWOKERTO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASARWAGEPURWOKERTO_14, 
                style: style_PASARWAGEPURWOKERTO_14,
                popuplayertitle: "PASAR WAGE PURWOKERTO",
                interactive: true,
                title: '<img src="styles/legend/PASARWAGEPURWOKERTO_14.png" /> PASAR WAGE PURWOKERTO'
            });
var format_MasjiddiPwtWetan_15 = new ol.format.GeoJSON();
var features_MasjiddiPwtWetan_15 = format_MasjiddiPwtWetan_15.readFeatures(json_MasjiddiPwtWetan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MasjiddiPwtWetan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjiddiPwtWetan_15.addFeatures(features_MasjiddiPwtWetan_15);
var lyr_MasjiddiPwtWetan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjiddiPwtWetan_15, 
                style: style_MasjiddiPwtWetan_15,
                popuplayertitle: "Masjid di Pwt Wetan",
                interactive: true,
                title: '<img src="styles/legend/MasjiddiPwtWetan_15.png" /> Masjid di Pwt Wetan'
            });
var format_Rumahsakit_16 = new ol.format.GeoJSON();
var features_Rumahsakit_16 = format_Rumahsakit_16.readFeatures(json_Rumahsakit_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rumahsakit_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahsakit_16.addFeatures(features_Rumahsakit_16);
var lyr_Rumahsakit_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahsakit_16, 
                style: style_Rumahsakit_16,
                popuplayertitle: "Rumah sakit",
                interactive: true,
                title: '<img src="styles/legend/Rumahsakit_16.png" /> Rumah sakit'
            });
var format_RedDoorz_17 = new ol.format.GeoJSON();
var features_RedDoorz_17 = format_RedDoorz_17.readFeatures(json_RedDoorz_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RedDoorz_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedDoorz_17.addFeatures(features_RedDoorz_17);
var lyr_RedDoorz_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedDoorz_17, 
                style: style_RedDoorz_17,
                popuplayertitle: "RedDoorz",
                interactive: true,
                title: '<img src="styles/legend/RedDoorz_17.png" /> RedDoorz'
            });
var format_OYO_18 = new ol.format.GeoJSON();
var features_OYO_18 = format_OYO_18.readFeatures(json_OYO_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_OYO_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OYO_18.addFeatures(features_OYO_18);
var lyr_OYO_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OYO_18, 
                style: style_OYO_18,
                popuplayertitle: "OYO",
                interactive: true,
                title: '<img src="styles/legend/OYO_18.png" /> OYO'
            });
var format_GudangRitaRitelindo_19 = new ol.format.GeoJSON();
var features_GudangRitaRitelindo_19 = format_GudangRitaRitelindo_19.readFeatures(json_GudangRitaRitelindo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GudangRitaRitelindo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GudangRitaRitelindo_19.addFeatures(features_GudangRitaRitelindo_19);
var lyr_GudangRitaRitelindo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GudangRitaRitelindo_19, 
                style: style_GudangRitaRitelindo_19,
                popuplayertitle: "Gudang Rita Ritelindo",
                interactive: true,
                title: '<img src="styles/legend/GudangRitaRitelindo_19.png" /> Gudang Rita Ritelindo'
            });
var format_TEMPATMAKAN_20 = new ol.format.GeoJSON();
var features_TEMPATMAKAN_20 = format_TEMPATMAKAN_20.readFeatures(json_TEMPATMAKAN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TEMPATMAKAN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATMAKAN_20.addFeatures(features_TEMPATMAKAN_20);
var lyr_TEMPATMAKAN_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATMAKAN_20, 
                style: style_TEMPATMAKAN_20,
                popuplayertitle: "TEMPAT MAKAN",
                interactive: true,
                title: '<img src="styles/legend/TEMPATMAKAN_20.png" /> TEMPAT MAKAN'
            });
var format_TPQBAITULHIKMAHPUROKWRTOWETAN_21 = new ol.format.GeoJSON();
var features_TPQBAITULHIKMAHPUROKWRTOWETAN_21 = format_TPQBAITULHIKMAHPUROKWRTOWETAN_21.readFeatures(json_TPQBAITULHIKMAHPUROKWRTOWETAN_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TPQBAITULHIKMAHPUROKWRTOWETAN_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPQBAITULHIKMAHPUROKWRTOWETAN_21.addFeatures(features_TPQBAITULHIKMAHPUROKWRTOWETAN_21);
var lyr_TPQBAITULHIKMAHPUROKWRTOWETAN_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPQBAITULHIKMAHPUROKWRTOWETAN_21, 
                style: style_TPQBAITULHIKMAHPUROKWRTOWETAN_21,
                popuplayertitle: "TPQ BAITUL HIKMAH PUROKWRTO WETAN",
                interactive: true,
                title: '<img src="styles/legend/TPQBAITULHIKMAHPUROKWRTOWETAN_21.png" /> TPQ BAITUL HIKMAH PUROKWRTO WETAN'
            });
var format_Gereja_22 = new ol.format.GeoJSON();
var features_Gereja_22 = format_Gereja_22.readFeatures(json_Gereja_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gereja_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gereja_22.addFeatures(features_Gereja_22);
var lyr_Gereja_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gereja_22, 
                style: style_Gereja_22,
                popuplayertitle: "Gereja ",
                interactive: true,
                title: '<img src="styles/legend/Gereja_22.png" /> Gereja '
            });
var format_BANK_23 = new ol.format.GeoJSON();
var features_BANK_23 = format_BANK_23.readFeatures(json_BANK_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANK_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_23.addFeatures(features_BANK_23);
var lyr_BANK_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANK_23, 
                style: style_BANK_23,
                popuplayertitle: "BANK",
                interactive: true,
                title: '<img src="styles/legend/BANK_23.png" /> BANK'
            });
var format_SEKOLAH_24 = new ol.format.GeoJSON();
var features_SEKOLAH_24 = format_SEKOLAH_24.readFeatures(json_SEKOLAH_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SEKOLAH_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAH_24.addFeatures(features_SEKOLAH_24);
var lyr_SEKOLAH_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEKOLAH_24, 
                style: style_SEKOLAH_24,
                popuplayertitle: "SEKOLAH",
                interactive: true,
                title: '<img src="styles/legend/SEKOLAH_24.png" /> SEKOLAH'
            });
var format_PEMAKAMAN_25 = new ol.format.GeoJSON();
var features_PEMAKAMAN_25 = format_PEMAKAMAN_25.readFeatures(json_PEMAKAMAN_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMAKAMAN_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMAKAMAN_25.addFeatures(features_PEMAKAMAN_25);
var lyr_PEMAKAMAN_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMAKAMAN_25, 
                style: style_PEMAKAMAN_25,
                popuplayertitle: "PEMAKAMAN ",
                interactive: true,
                title: '<img src="styles/legend/PEMAKAMAN_25.png" /> PEMAKAMAN '
            });
var format_BrowniesAmandaPurwokwerto_26 = new ol.format.GeoJSON();
var features_BrowniesAmandaPurwokwerto_26 = format_BrowniesAmandaPurwokwerto_26.readFeatures(json_BrowniesAmandaPurwokwerto_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BrowniesAmandaPurwokwerto_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrowniesAmandaPurwokwerto_26.addFeatures(features_BrowniesAmandaPurwokwerto_26);
var lyr_BrowniesAmandaPurwokwerto_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrowniesAmandaPurwokwerto_26, 
                style: style_BrowniesAmandaPurwokwerto_26,
                popuplayertitle: "Brownies Amanda Purwokwerto",
                interactive: true,
                title: '<img src="styles/legend/BrowniesAmandaPurwokwerto_26.png" /> Brownies Amanda Purwokwerto'
            });
var format_LapanganBola_27 = new ol.format.GeoJSON();
var features_LapanganBola_27 = format_LapanganBola_27.readFeatures(json_LapanganBola_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LapanganBola_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganBola_27.addFeatures(features_LapanganBola_27);
var lyr_LapanganBola_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganBola_27, 
                style: style_LapanganBola_27,
                popuplayertitle: "Lapangan Bola",
                interactive: true,
                title: '<img src="styles/legend/LapanganBola_27.png" /> Lapangan Bola'
            });
var format_Perumahan_28 = new ol.format.GeoJSON();
var features_Perumahan_28 = format_Perumahan_28.readFeatures(json_Perumahan_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Perumahan_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perumahan_28.addFeatures(features_Perumahan_28);
var lyr_Perumahan_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perumahan_28, 
                style: style_Perumahan_28,
                popuplayertitle: "Perumahan",
                interactive: true,
                title: '<img src="styles/legend/Perumahan_28.png" /> Perumahan'
            });
var format_RumahRizqi_29 = new ol.format.GeoJSON();
var features_RumahRizqi_29 = format_RumahRizqi_29.readFeatures(json_RumahRizqi_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahRizqi_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRizqi_29.addFeatures(features_RumahRizqi_29);
var lyr_RumahRizqi_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRizqi_29, 
                style: style_RumahRizqi_29,
                popuplayertitle: "Rumah Rizqi",
                interactive: true,
                title: '<img src="styles/legend/RumahRizqi_29.png" /> Rumah Rizqi'
            });
var format_Wilayah_Purwokerto_Wetan_point_30 = new ol.format.GeoJSON();
var features_Wilayah_Purwokerto_Wetan_point_30 = format_Wilayah_Purwokerto_Wetan_point_30.readFeatures(json_Wilayah_Purwokerto_Wetan_point_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wilayah_Purwokerto_Wetan_point_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Purwokerto_Wetan_point_30.addFeatures(features_Wilayah_Purwokerto_Wetan_point_30);
var lyr_Wilayah_Purwokerto_Wetan_point_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Purwokerto_Wetan_point_30, 
                style: style_Wilayah_Purwokerto_Wetan_point_30,
                popuplayertitle: "Wilayah_Purwokerto_Wetan_point",
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Purwokerto_Wetan_point_30.png" /> Wilayah_Purwokerto_Wetan_point'
            });
var format_ADMINISTRASIDESA_AR_25K_31 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_31 = format_ADMINISTRASIDESA_AR_25K_31.readFeatures(json_ADMINISTRASIDESA_AR_25K_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_31.addFeatures(features_ADMINISTRASIDESA_AR_25K_31);
var lyr_ADMINISTRASIDESA_AR_25K_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_31, 
                style: style_ADMINISTRASIDESA_AR_25K_31,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_31.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Kantor_32 = new ol.format.GeoJSON();
var features_Kantor_32 = format_Kantor_32.readFeatures(json_Kantor_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kantor_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_32.addFeatures(features_Kantor_32);
var lyr_Kantor_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_32, 
                style: style_Kantor_32,
                popuplayertitle: "Kantor",
                interactive: true,
                title: '<img src="styles/legend/Kantor_32.png" /> Kantor'
            });
var format_RUMAH_33 = new ol.format.GeoJSON();
var features_RUMAH_33 = format_RUMAH_33.readFeatures(json_RUMAH_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RUMAH_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAH_33.addFeatures(features_RUMAH_33);
var lyr_RUMAH_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAH_33, 
                style: style_RUMAH_33,
                popuplayertitle: "RUMAH",
                interactive: true,
                title: '<img src="styles/legend/RUMAH_33.png" /> RUMAH'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LahanKosongGrahaTimur_1.setVisible(true);lyr_Kuburan_2.setVisible(true);lyr_BatasRT_3.setVisible(true);lyr_KaliBiru_4.setVisible(true);lyr_KaliPutih_5.setVisible(true);lyr_KaliGunem_6.setVisible(true);lyr_Wilayah_Purwokerto_Wetan_poly_7.setVisible(true);lyr_LAPANGNMARSPURWOKERTOWETAN_8.setVisible(true);lyr_LapanganSmeconne_9.setVisible(true);lyr_Jalan_10.setVisible(true);lyr_ALFAMART_11.setVisible(true);lyr_KLENTENGHOKTEHBIOPURWOKERTO_12.setVisible(true);lyr_TOKOEMAS_13.setVisible(true);lyr_PASARWAGEPURWOKERTO_14.setVisible(true);lyr_MasjiddiPwtWetan_15.setVisible(true);lyr_Rumahsakit_16.setVisible(true);lyr_RedDoorz_17.setVisible(true);lyr_OYO_18.setVisible(true);lyr_GudangRitaRitelindo_19.setVisible(true);lyr_TEMPATMAKAN_20.setVisible(true);lyr_TPQBAITULHIKMAHPUROKWRTOWETAN_21.setVisible(true);lyr_Gereja_22.setVisible(true);lyr_BANK_23.setVisible(true);lyr_SEKOLAH_24.setVisible(true);lyr_PEMAKAMAN_25.setVisible(true);lyr_BrowniesAmandaPurwokwerto_26.setVisible(true);lyr_LapanganBola_27.setVisible(true);lyr_Perumahan_28.setVisible(true);lyr_RumahRizqi_29.setVisible(true);lyr_Wilayah_Purwokerto_Wetan_point_30.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_31.setVisible(true);lyr_Kantor_32.setVisible(true);lyr_RUMAH_33.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LahanKosongGrahaTimur_1,lyr_Kuburan_2,lyr_BatasRT_3,lyr_KaliBiru_4,lyr_KaliPutih_5,lyr_KaliGunem_6,lyr_Wilayah_Purwokerto_Wetan_poly_7,lyr_LAPANGNMARSPURWOKERTOWETAN_8,lyr_LapanganSmeconne_9,lyr_Jalan_10,lyr_ALFAMART_11,lyr_KLENTENGHOKTEHBIOPURWOKERTO_12,lyr_TOKOEMAS_13,lyr_PASARWAGEPURWOKERTO_14,lyr_MasjiddiPwtWetan_15,lyr_Rumahsakit_16,lyr_RedDoorz_17,lyr_OYO_18,lyr_GudangRitaRitelindo_19,lyr_TEMPATMAKAN_20,lyr_TPQBAITULHIKMAHPUROKWRTOWETAN_21,lyr_Gereja_22,lyr_BANK_23,lyr_SEKOLAH_24,lyr_PEMAKAMAN_25,lyr_BrowniesAmandaPurwokwerto_26,lyr_LapanganBola_27,lyr_Perumahan_28,lyr_RumahRizqi_29,lyr_Wilayah_Purwokerto_Wetan_point_30,lyr_ADMINISTRASIDESA_AR_25K_31,lyr_Kantor_32,lyr_RUMAH_33];
lyr_LahanKosongGrahaTimur_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Kuburan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BatasRT_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KaliBiru_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KaliPutih_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KaliGunem_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Wilayah_Purwokerto_Wetan_poly_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'name_fr': 'name_fr', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_LAPANGNMARSPURWOKERTOWETAN_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_LapanganSmeconne_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jalan_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ALFAMART_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KLENTENGHOKTEHBIOPURWOKERTO_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TOKOEMAS_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_PASARWAGEPURWOKERTO_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_MasjiddiPwtWetan_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Rumahsakit_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RedDoorz_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_OYO_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_GudangRitaRitelindo_19.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TEMPATMAKAN_20.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TPQBAITULHIKMAHPUROKWRTOWETAN_21.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Gereja_22.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BANK_23.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_SEKOLAH_24.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_PEMAKAMAN_25.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BrowniesAmandaPurwokwerto_26.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_LapanganBola_27.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Perumahan_28.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahRizqi_29.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Wilayah_Purwokerto_Wetan_point_30.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'name_fr': 'name_fr', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_ADMINISTRASIDESA_AR_25K_31.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kantor_32.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RUMAH_33.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_LahanKosongGrahaTimur_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Kuburan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BatasRT_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KaliBiru_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KaliPutih_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KaliGunem_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Wilayah_Purwokerto_Wetan_poly_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'name_fr': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_LAPANGNMARSPURWOKERTOWETAN_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_LapanganSmeconne_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jalan_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ALFAMART_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KLENTENGHOKTEHBIOPURWOKERTO_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_TOKOEMAS_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_PASARWAGEPURWOKERTO_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_MasjiddiPwtWetan_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Rumahsakit_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RedDoorz_17.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_OYO_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_GudangRitaRitelindo_19.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_TEMPATMAKAN_20.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_TPQBAITULHIKMAHPUROKWRTOWETAN_21.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Gereja_22.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BANK_23.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_SEKOLAH_24.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_PEMAKAMAN_25.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BrowniesAmandaPurwokwerto_26.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_LapanganBola_27.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Perumahan_28.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahRizqi_29.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Wilayah_Purwokerto_Wetan_point_30.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'name_fr': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_31.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Kantor_32.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RUMAH_33.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_LahanKosongGrahaTimur_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Kuburan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BatasRT_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KaliBiru_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KaliPutih_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KaliGunem_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Wilayah_Purwokerto_Wetan_poly_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'name_en': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'name_fr': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_LAPANGNMARSPURWOKERTOWETAN_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_LapanganSmeconne_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Jalan_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_ALFAMART_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KLENTENGHOKTEHBIOPURWOKERTO_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TOKOEMAS_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_PASARWAGEPURWOKERTO_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_MasjiddiPwtWetan_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Rumahsakit_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RedDoorz_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_OYO_18.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_GudangRitaRitelindo_19.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TEMPATMAKAN_20.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TPQBAITULHIKMAHPUROKWRTOWETAN_21.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Gereja_22.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BANK_23.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_SEKOLAH_24.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_PEMAKAMAN_25.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BrowniesAmandaPurwokwerto_26.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_LapanganBola_27.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Perumahan_28.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahRizqi_29.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Wilayah_Purwokerto_Wetan_point_30.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'name_en': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'name_fr': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_31.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kantor_32.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RUMAH_33.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RUMAH_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});