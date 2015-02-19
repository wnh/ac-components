angular.module("acComponents.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("danger-icon.html","<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"398.5 12.1 555 560\" enable-background=\"new 398.5 12.1 555 560\" xml:space=\"preserve\" class=\"danger-icon\"><polygon id=\"alp\" points=\"747.7,218.1 623.1,197.6 678.8,109.8\"></polygon><polygon id=\"tln\" points=\"794.2,291 542.8,323.6 616.7,207.4 755.5,230.3\"></polygon><polygon id=\"btl\" points=\"858.3,391.8 499.4,391.8 535.1,335.5 800.6,301.1\"></polygon></svg>");
$templateCache.put("drawer.html","<div class=\"ac-drawer\"><style>.ac-drawer-tools {\n    z-index: -200;\n}\n\n.ac-date-filters {\n    background-color: transparent;\n}\n\n.ac-date-filters ul {\n    position: relative;\n    width: 150px;\n}\n\n.ac-date-filters ul.expanded {\n    right: 100px;\n}\n\n.ac-date-filters ul li {\n    color: rgba(255, 255, 255, 0.2);\n}\n\n.ac-date-filters ul li.on {\n    color: rgb(0, 86, 183);\n}\n\n.ac-date-filters ul li i {\n    padding-top: 5px; \n    margin-left: 8px;\n}\n\n.ac-date-filters ul li span {\n    display: block;\n    font-size: 0.7em;\n    padding-left: 4px;\n}\n</style><a ng-click=\"drawer.visible = false\" class=\"ac-drawer-close visible-xs\"><i class=\"fa fa-close fa-lg\"></i></a><div class=\"ac-drawer-tools\"><ul><li ng-click=\"drawer.enabled = !drawer.enabled; regionsVisible = !regionsVisible;\" ng-class=\"{on: drawer.visible &amp;&amp; drawer.enabled}\" style=\"margin-bottom: 50px;\"><div ac-danger-icon=\"ac-danger-icon\" style=\"height: 50px; width:50px;\"></div></li><li ng-click=\"toggleFilter()\" ng-class=\"{on: filters.obsPeriod !== \'\'}\" style=\"padding-top: 11px; padding-left: 15px;\"><i class=\"fa fa-map-marker fa-inverse fa-2x\"></i></li><li ng-click=\"expanded = true\" style=\"background-color: transparent;\" class=\"ac-date-filters\"><ul ng-class=\"{expanded: expanded}\" ng-init=\"expanded = false\" class=\"list-inline\"><li ng-repeat=\"dateFilter in dateFilters\" ng-click=\"toggleFilter(\'obsPeriod:\'+dateFilter)\" ng-class=\"{on: filters.obsPeriod === dateFilter}\"><i class=\"fa fa-calendar fa-inverse fa-2x\"></i><span>{{ dateFilter }}</span></li></ul></li></ul></div><div ng-transclude=\"ng-transclude\" class=\"ac-drawer-body\"></div></div>");
$templateCache.put("forecast-mini.html","<div class=\"panel\"><div ng-show=\"forecast.externalUrl\" style=\"min-height: 500px;\" class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12\"><h3 class=\"ac-forecast-region\">{{ forecast.name }}</h3></div></div><div class=\"row\"><div class=\"col-xs-12\"><p>Avalanche information for this region is available &nbsp;<a ng-click=\"externalLinkClicked(forecast.externalUrl)\"><i class=\"fa fa-external-link\">here</i></a></p></div></div></div><div ng-hide=\"forecast.externalUrl\" class=\"panel-body ac-forecast-mini-body\"><div class=\"row\"><div class=\"col-xs-12\"><h4 class=\"ac-forecast-region\">{{ forecast.bulletinTitle | acNormalizeForecastTitle }}</h4></div></div><div class=\"row ac-forecast-dates\"><div class=\"col-md-6\"><dl><dd class=\"small\"><strong class=\"ac-text-primary\">DATE ISSUED</strong></dd><dt class=\"small\"><span class=\"ac-text-default\">{{ forecast.dateIssued | date:\'EEEE MMMM d, y h:mm a\'  | uppercase }}</span></dt></dl></div><div class=\"col-md-6\"><dl><dd class=\"small\"><strong class=\"ac-text-primary\">VALID UNTIL</strong></dd><dt class=\"small\"><span class=\"ac-text-default\">{{ forecast.validUntil | date:\'EEEE MMMM d, y h:mm a\' | uppercase }}</span></dt></dl></div></div><div class=\"row\"><div class=\"col-xs-12\"><p class=\"ac-forecast-highlights\"><strong ng-bind-html=\"forecast.highlights\"></strong></p></div></div><div class=\"row\"><div class=\"col-xs-12\"><ul role=\"tablist\" class=\"nav nav-pills\"><li class=\"active\"><a href=\"\" role=\"tab\" data-target=\"#forecast\" data-toggle=\"tab\">Forecast</a></li><li><a href=\"\" role=\"tab\" data-target=\"#problems\" data-toggle=\"tab\">Problems</a></li><li><a href=\"\" role=\"tab\" data-target=\"#details\" data-toggle=\"tab\">Details</a></li><li><a href=\"/forecasts/{{forecast.region}}\" role=\"tab\" data-toggle=\"tab\">Full Page</a></li></ul><div class=\"tab-content\"><div id=\"forecast\" class=\"tab-pane active\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"panel panel-primary\"><div class=\"panel-heading\">{{ forecast.dangerRatings[0].date | dateUtc:\'dddd\' }}</div><div class=\"panel-body ac-forecast-nowcast\"><img ng-show=\"forecast.region\" ng-src=\"{{forecast.region &amp;&amp; apiUrl+\'/api/forecasts/\' + forecast.region  + \'/nowcast.svg\' || \'\'}}\" class=\"ac-nowcast\"/></div><table class=\"table table-condensed ac-forecast-days\"><thead class=\"ac-thead-dark\"><tr><th></th><th>{{ forecast.dangerRatings[1].date | dateUtc:\'dddd\' }}</th><th>{{ forecast.dangerRatings[2].date | dateUtc:\'dddd\' }}</th></tr></thead><tbody><tr><td class=\"ac-veg-zone--alp\"><strong>Alpine</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[1].dangerRating.alp.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[1].dangerRating.alp.replace(\':\', \' \') }}</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[2].dangerRating.alp.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[2].dangerRating.alp.replace(\':\', \' \') }}</strong></td></tr><tr><td class=\"ac-veg-zone--tln\"><strong>Treeline</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[1].dangerRating.tln.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[1].dangerRating.tln.replace(\':\', \' \') }}</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[2].dangerRating.tln.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[2].dangerRating.tln.replace(\':\', \' \') }}</strong></td></tr><tr><td class=\"ac-veg-zone--btl\"><strong>Bellow Treeline</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[1].dangerRating.btl.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[1].dangerRating.btl.replace(\':\', \' \') }}</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[2].dangerRating.btl.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[2].dangerRating.btl.replace(\':\', \' \') }}</strong></td></tr><tr><td><strong>Confidence:</strong></td><td colspan=\"2\"><span class=\"ac-text-default\">{{ forecast.confidence }}</span></td></tr></tbody></table></div></div></div></div><div id=\"problems\" class=\"tab-pane\"><div id=\"problemsAccordion\" class=\"panel-group\"><div ng-repeat=\"problem in forecast.problems\" class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#problem{{$index}}\" data-toggle=\"collapse\" data-parent=\"#problemsAccordion\">{{ problem.type }}<i class=\"fa fa-fw fa-level-down pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"problem{{$index}}\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">What Elevations?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--elevations\"><img ng-src=\"{{problem.icons.elevations}}\" class=\"center-block\"/></div></div></div><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">What Aspects?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--aspects\"><img ng-src=\"{{problem.icons.aspects}}\" class=\"center-block\"/></div></div></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">Chances of Avalanches?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--likelihood\"><img ng-src=\"{{problem.icons.likelihood}}\" class=\"center-block\"/></div></div></div><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">Expected Size?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--expected-size\"><img ng-src=\"{{problem.icons.expectedSize}}\" class=\"center-block\"/></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><p ng-bind-html=\"problem.comment\" class=\"ac-problem narative\"></p><div class=\"panel panel-default ac-problem-travel-advice\"><div class=\"panel-heading\"><strong class=\"small\">Travel and Terrain Advice</strong></div><div class=\"panel-body\"><p ng-bind-html=\"problem.travelAndTerrainAdvice\"></p></div></div></div></div></div></div></div></div></div><div id=\"details\" class=\"tab-pane\"><div id=\"detailsAccordion\" class=\"panel-group\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#avalancheSummary\" data-toggle=\"collapse\" data-parent=\"#detailsAccordion\">Avalanche Summary<i class=\"fa fa-fw fa-level-down fa-lg pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"avalancheSummary\" class=\"panel-collapse collapse\"><div ng-bind-html=\"forecast.avalancheSummary\" class=\"panel-body\"></div></div></div><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#snowpackSummary\" data-toggle=\"collapse\" data-parent=\"#detailsAccordion\">Snowpack Summary<i class=\"fa fa-fw fa-level-down fa-lg pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"snowpackSummary\" class=\"panel-collapse collapse\"><div ng-bind-html=\"forecast.snowpackSummary\" class=\"panel-body\"></div></div></div><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#weatherForecast\" data-toggle=\"collapse\" data-parent=\"#detailsAccordion\">Weather Forecast<i class=\"fa fa-fw fa-level-down fa-lg pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"weatherForecast\" class=\"panel-collapse collapse\"><div ng-bind-html=\"forecast.weatherForecast\" class=\"panel-body\"></div></div></div></div></div></div></div></div></div></div>");
$templateCache.put("loading-indicator.html","<div class=\"ac-loading-indicator\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div><div class=\"rect5\"></div></div>");
$templateCache.put("min-report-form.html","<div class=\"min-form\"><form name=\"acMinForm\" ng-submit=\"submitForm()\" ng-show=\"!report.subid &amp;&amp; !minerror\" role=\"form\"><div ng-class=\"{\'has-error\': !acMinForm.title.$valid}\" class=\"form-group\"><label for=\"title\"><i class=\"fa fa-newspaper-o\"></i> Report title</label><input type=\"text\" name=\"title\" ng-model=\"report.title\" required=\"required\" class=\"form-control\"/></div><div ng-class=\"{\'has-error\': !acMinForm.datetime.$valid}\" class=\"form-group\"><label for=\"datetime\"><i class=\"fa fa-clock-o\"></i> Date and Time</label><input type=\"datetime\" name=\"datetime\" ng-model=\"report.datetime\" ac-datetime-picker=\"ac-datetime-picker\" class=\"form-control\"/></div><div ng-class=\"{\'has-error\': !acMinForm.latlng.$valid}\" class=\"form-group\"><label for=\"latlng\"><i class=\"fa fa-map-marker\"></i> Location</label><div ac-location-select=\"ac-location-select\" latlng=\"report.latlng\" style=\"height: 300px; width: 100%; margin: 10px 0;\"></div><input type=\"text\" name=\"latlng\" ng-model=\"report.latlng\" placeholder=\"Drop pin on map to set location\" required=\"required\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"uploads\"><i class=\"fa fa-image\"></i> Add photo<small style=\"font-weight: normal;\"> .jpg or .png</small></label><input type=\"file\" name=\"uploads\" file-model=\"report.files\" accept=\".png,.jpg,.jpeg\" multiple=\"multiple\" class=\"form-control\"/><div>{{ report.files.length }} photos added</div></div><div class=\"panel-group\"><div class=\"panel panel-default\"><div style=\"background-color: black; color: white;\" class=\"panel-heading\"><h4 class=\"panel-title\">Riding conditions</h4></div><div class=\"panel-body\"><div class=\"panel-group\"><div ng-repeat=\"(item, ridingCondition) in report.ridingConditions\" class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><strong>{{ ridingCondition.prompt }}</strong></h4></div><div class=\"panel-body\"><div class=\"form-group\"></div><div ng-if=\"ridingCondition.type==\'multiple\'\" ng-repeat=\"(option, enabled) in ridingCondition.options\" class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"report.ridingConditions[item].options[option]\"/>{{option}}</label></div><div ng-if=\"ridingCondition.type==\'single\'\" ng-repeat=\"option in ridingCondition.options\" class=\"radio\"><label><input type=\"radio\" ng-model=\"report.ridingConditions[item].selected\" ng-value=\"option\"/>{{option}}</label></div></div></div></div></div></div><div class=\"panel panel-default\"><div style=\"background-color: black; color: white;\" class=\"panel-heading\"><h4 class=\"panel-title\"><strong>Avalanche conditions</strong></h4></div><div class=\"panel-body\"><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"report.avalancheConditions.slab\"/>Slab avalanches today or yesterday.</label></div><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"report.avalancheConditions.sound\"/>Whumphing or drum-like sounds or shooting cracks.</label></div><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"report.avalancheConditions.snow\"/>30cm + of new snow, or significant drifitng, or rain in the last 48 hours.</label></div><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"report.avalancheConditions.temp\"/>Rapid temperature rise to near zero degrees or wet surface snow.</label></div></div></div></div></div><div class=\"form-group\"><label>Comments</label><textarea rows=\"3\" ng-model=\"report.comment\" class=\"form-control\"></textarea></div><input type=\"submit\" id=\"submit\" value=\"Submit\" ng-disabled=\"minsubmitting\" style=\"border-radius:0; background-color: rgb(0, 86, 183); color: white;\" class=\"btn btn-default\"/><i ng-show=\"minsubmitting\" class=\"fa fa-fw fa-lg fa-spinner fa-spin\"></i></form><div ng-show=\"report.subid\"><div role=\"alert\" class=\"alert alert-success\">Your report was successfully submited.</div><div class=\"well\"><H4>Share this report:</H4><ul class=\"list-inline\"><li><a ng-href=\"https://twitter.com/intent/tweet?status={{report.shareUrl}}\"><i class=\"fa fa-twitter fa-fw fa-lg\"></i></a></li><li><a ng-href=\"https://www.facebook.com/sharer/sharer.php?u={{report.shareUrl}}\"><i class=\"fa fa-facebook fa-fw fa-lg\"></i></a></li><li><a ng-href=\"https://plus.google.com/share?url={{report.shareUrl}}\"><i class=\"fa fa-google-plus fa-fw fa-lg\"></i></a></li></ul></div></div><div ng-show=\"minerror\"><div role=\"alert\" class=\"alert alert-danger\"><p>There was an error submittting you report.</p><p>{{minerrormsg}}</p></div></div></div>");
$templateCache.put("min-report-modal.html","<div id=\"minForm\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button data-dismiss=\"modal\" class=\"close\"><span>close</span></button><h4 class=\"modal-title\">Mountain Information Network Report</h4></div><div class=\"modal-body\"><div ac-min-report-form=\"ac-min-report-form\"></div></div></div></div></div>");
$templateCache.put("min-report-popup-modal.html","<div id=\"mobileMapPopup\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"></div>                <a href=\"#\" data-dismiss=\"modal\" style=\"position: absolute; right: 10px; top: 10px;\" class=\"pull-right\"><i class=\"fa fa-close fa-lg\"></i></a></div></div></div>");
$templateCache.put("social-share.html","<div class=\"well\"><H4>Share this report:</H4><ul class=\"list-inline\"><li><a href=\"https://twitter.com/intent/tweet?url=http://avalanche.ca\"><i class=\"fa fa-twitter fa-fw fa-lg\"></i></a></li><li><a href=\"https://www.facebook.com/sharer/sharer.php?u=http://avalanche.ca\"><i class=\"fa fa-facebook fa-fw fa-lg\"></i></a></li><li><a href=\"https://plus.google.com/share?url=http://avalanche.ca\"><i class=\"fa fa-google-plus fa-fw fa-lg\"></i></a></li></ul></div>");}]);