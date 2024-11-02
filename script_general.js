(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"propagateClick":false,"scrollBarColor":"#000000","scripts":{"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"createTween":TDV.Tour.Script.createTween,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPixels":TDV.Tour.Script.getPixels,"initAnalytics":TDV.Tour.Script.initAnalytics,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"enableVR":TDV.Tour.Script.enableVR,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleVR":TDV.Tour.Script.toggleVR,"setValue":TDV.Tour.Script.setValue,"disableVR":TDV.Tour.Script.disableVR,"initQuiz":TDV.Tour.Script.initQuiz,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaByName":TDV.Tour.Script.getMediaByName,"init":TDV.Tour.Script.init,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"textToSpeech":TDV.Tour.Script.textToSpeech,"existsKey":TDV.Tour.Script.existsKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"downloadFile":TDV.Tour.Script.downloadFile,"shareSocial":TDV.Tour.Script.shareSocial,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumePlayers":TDV.Tour.Script.resumePlayers,"getKey":TDV.Tour.Script.getKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showWindow":TDV.Tour.Script.showWindow,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlays":TDV.Tour.Script.getOverlays,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"translate":TDV.Tour.Script.translate,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"mixObject":TDV.Tour.Script.mixObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setLocale":TDV.Tour.Script.setLocale},"minHeight":0,"start":"this.playAudioList([this.audio_FC424868_EB22_AEA4_41DF_A31A8875399B], true); this.init()","gap":10,"minWidth":0,"id":"rootPlayer","defaultMenu":["fullscreen","mute","rotation"],"data":{"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false},"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","name":"Player3582","history":{}},"backgroundColor":["#FFFFFF"],"class":"Player","hash": "c4fe05e87cc01b07739decb3c4c804d575e576e10996706d3d9028296e111a9a", "definitions": [{"displayOriginPosition":{"pitch":-90,"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","hfov":165,"yaw":0},"id":"panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_camera","enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_F8374C2B_EB3F_E6A4_41BD_9583368421E7","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":2000},{"duration":5000,"targetStereographicFactor":0,"targetHfov":120,"targetPitch":0,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out"}],"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","hfov":120,"yaw":0}},{"propagateClick":false,"minHeight":1,"verticalAlign":"middle","minWidth":1,"id":"Image_FFC5415C_EB26_BE9D_41CA_D5B4735DD0B4","left":"0%","data":{"name":"Image5153"},"class":"Image","backgroundOpacity":0,"url":trans('Image_FFC5415C_EB26_BE9D_41CA_D5B4735DD0B4.url'),"top":"0%","height":"11.797%","width":"8.886%","scaleMode":"fit_inside","horizontalAlign":"center"},{"touchControlMode":"drag_rotation","arrowKeysAction":"translate","class":"PanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"propagateClick":false,"minHeight":1,"verticalAlign":"middle","minWidth":1,"id":"Image_FF50E7CE_EB22_61FC_41C7_A904FDD3B685","data":{"name":"Image4713"},"class":"Image","backgroundOpacity":0,"right":"0.38%","url":trans('Image_FF50E7CE_EB22_61FC_41C7_A904FDD3B685.url'),"top":"0%","height":"16.979%","width":"11.893%","scaleMode":"fit_inside","horizontalAlign":"center"},{"data":{"label":"Toy Story - Amigo Estou Aqui (Vers\u00e3o Karaok\u00ea) - Playback (Cover)"},"autoplay":true,"audio":"this.audiores_FF86C9EF_EB2E_61BC_41ED_0F95E489A2F4","class":"MediaAudio","id":"audio_FC424868_EB22_AEA4_41DF_A31A8875399B"},{"toolTipFontSize":"1.11vmin","playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","vrPointerSelectionColor":"#FF6600","minHeight":50,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","minWidth":100,"progressBarBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","subtitlesTop":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"toolTipPaddingTop":4,"playbackBarProgressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"toolTipPaddingBottom":4,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","playbackBarHeadShadow":true,"toolTipFontFamily":"Arial","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderSize":0,"vrThumbstickRotationStep":20,"subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"toolTipPaddingRight":6,"propagateClick":false,"progressBackgroundColor":["#000000"],"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","subtitlesFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","firstTransitionDuration":0,"progressHeight":2,"toolTipFontColor":"#606060","id":"MainViewer","progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"class":"ViewerArea","playbackBarBackgroundOpacity":1,"playbackBarHeadWidth":6,"toolTipPaddingLeft":6,"toolTipTextShadowColor":"#000000","progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","progressBarBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"progressBorderSize":0,"playbackBarHeight":10,"progressBorderRadius":2,"progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","subtitlesTextShadowColor":"#000000","subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"progressRight":"33%","height":"100%","progressLeft":"33%","subtitlesBottom":50,"width":"100%","progressOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin"},{"items":[{"camera":"this.panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_camera","media":"this.panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList","id":"mainPlayList"},{"label":trans('panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_t.webp","id":"panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE","data":{"label":"uma a um"},"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_t.webp","cube":{"class":"ImageResource","levels":[{"width":18432,"url":"media/panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_0/{face}/0/{row}_{column}.webp","tags":"ondemand","height":3072,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3},{"width":12288,"url":"media/panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_0/{face}/1/{row}_{column}.webp","tags":"ondemand","height":2048,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"width":6144,"url":"media/panorama_F9C15361_EB3F_E2A4_41D8_A2A6F752A6BE_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"height":1024,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1}]},"class":"CubicPanoramaFrame"}],"hfovMin":"135%","vfov":180,"hfov":360},{"id":"sequence_F8374C2B_EB3F_E6A4_41BD_9583368421E7","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence"},{"class":"AudioResource","id":"audiores_FF86C9EF_EB2E_61BC_41ED_0F95E489A2F4","mp3Url":trans('audiores_FF86C9EF_EB2E_61BC_41ED_0F95E489A2F4.mp3Url')}],"left":589.65,"scrollBarMargin":2,"watermark":false,"width":"100%","height":"100%","children":["this.MainViewer","this.Image_FF50E7CE_EB22_61FC_41C7_A904FDD3B685","this.Image_FFC5415C_EB26_BE9D_41CA_D5B4735DD0B4"],"layout":"absolute","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.18.js.map
})();
//Generated with v2024.0.18, Fri Nov 1 2024