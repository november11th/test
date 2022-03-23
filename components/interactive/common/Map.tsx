import ReactDOMServer from "react-dom/server";
import _ from "lodash";
import { SetMealSharp } from "@mui/icons-material";

class Map {
  map: any;
  markerList: Array<any>;
  infoWindowList: Array<any>;
  polygonList: Array<any>;
  heatMap: any;
  resultdrawArr: Array<any>;

  constructor(
    divId: string = "map",
    lat: number = 37.5,
    lng: number = 127.5,
    zoom: number = 11,
    zoomControl = true,
    scrollwheel = false,
    handleLocationChange?: () => void
  ) {
    this.markerList = [];
    this.infoWindowList = [];
    this.polygonList = [];
    this.resultdrawArr = [];
    this.map = this.initTmap(lat, lng, divId, zoom, zoomControl, scrollwheel);
    this.map.setZoomLimit(9, 19); // minZoom 9 : '도' 단위로 제한
  }

  initTmap(
    lat: number,
    lng: number,
    divId: string,
    zoom: number,
    zoomControl: boolean,
    scrollwheel: boolean
  ) {
    return new (window as any).Tmapv2.Map(divId, {
      center: new (window as any).Tmapv2.LatLng(lat, lng),
      zoom: zoom,
      scrollwheel,
      zIndexMarker: 2,
      zIndexInfoWindow: 3,
      zoomControl,
    });
  }

  getNeSwEdge(margin = 0.002) {
    const coords = this.markerList
      .map((x) => x.getPosition())
      .concat(this.infoWindowList.map((x) => x.getPosition()));

    const ne = [
      Math.max(...coords.map((x) => x.lat())) + margin,
      Math.max(...coords.map((x) => x.lng())) + margin,
    ];
    const sw = [
      Math.min(...coords.map((x) => x.lat())) - margin,
      Math.min(...coords.map((x) => x.lng())) - margin,
    ];
    return [sw, ne];
  }

  fitBounds(ne: number[], sw: number[]) {
    const latLngBounds = this.makeLatLngBounds(ne, sw);
    this.map.fitBounds(latLngBounds);
  }

  getBounds() {
    return this.map.getBounds();
  }

  destroy() {
    if (this.map) {
      this.map.destroy();
    }
  }

  makeLatLngBounds(ne: number[], sw: number[]) {
    const ne_edge = new (window as any).Tmapv2.LatLng(ne[0], ne[1]);
    const sw_edge = new (window as any).Tmapv2.LatLng(sw[0], sw[1]);
    const latLngBounds = new (window as any).Tmapv2.LatLngBounds(
      ne_edge,
      sw_edge
    );
    return latLngBounds;
  }

  panBy(x: number, y: number) {
    this.map.panBy(x, y);
  }

  fitEdge() {
    const [sw, ne] = this.getNeSwEdge();
    this.fitBounds(ne, sw);
  }

  makeHTMLMarker(
    lat: number,
    lng: number,
    size: number = 30,
    contents: JSX.Element
  ) {
    return new (window as any).Tmapv2.Marker({
      position: new (window as any).Tmapv2.LatLng(lat, lng),
      map: this.map,
      iconHTML: ReactDOMServer.renderToString(contents),
      iconSize: new (window as any).Tmapv2.Size(size, size),
      visible: true,
    });
  }

  makeMarker(
    lat: number,
    lng: number,
    type: "normal" | "emphasis" = "normal",
    size: number = 20
  ) {
    return new (window as any).Tmapv2.Marker({
      position: new (window as any).Tmapv2.LatLng(lat, lng),
      map: this.map,
      icon: type === "normal" ? "/marker.png" : "/marker-emphasis.png",
      // iconSize: new (window as any).Tmapv2.Size(size, size * 1.2),
    });
  }

  addMarker(
    id: string,
    lat: number,
    lng: number,
    type?: "normal" | "emphasis",
    size?: number,
    contents?: JSX.Element,
    markerClickEvent?: (id: string) => void
  ) {
    const marker = contents
      ? this.makeHTMLMarker(lat, lng, size, contents)
      : this.makeMarker(lat, lng, type, size);

    if (markerClickEvent) {
      marker.addListener("touchstart", () => {
        markerClickEvent(id);
      });

      marker.addListener("click", () => {
        markerClickEvent(id);
      });
    }
    this.markerList.push(marker);
  }

  removeMarker() {
    this.markerList.map((x) => {
      x.setMap(null);
    });
    this.markerList = [];
  }

  addInfoWindow(lat: number, lng: number, content: string, zIndex: number = 5) {
    const infoWindow = this.makeInfoWindow(lat, lng, content, zIndex);
    this.infoWindowList.push(infoWindow);
  }

  makeInfoWindow(lat: number, lng: number, content: string, zIndex: number) {
    return new (window as any).Tmapv2.InfoWindow({
      position: new (window as any).Tmapv2.LatLng(lat, lng),
      content: content,
      border: "0",
      background: false,
      type: 2, // 1 = BALLOON / 2 = FLAT
      map: this.map,
      align: 18, // ALIGN_CENTERBOTTOM = 18
      zIndex: zIndex,
    });
  }

  removeInfoWindow() {
    this.infoWindowList.map((x) => {
      x.setMap(null);
    });
    this.infoWindowList = [];
  }

  addPolyLine(coordinates: Array<any>) {
    const polyLine = this.makePolyLine(coordinates);
    this.polygonList.push(polyLine);
  }

  makePolyLine(coordinates: Array<any>) {
    const path = coordinates.map((item: any) => {
      return new (window as any).Tmapv2.LatLng(item[0], item[1]);
    });

    const polyLine = new (window as any).Tmapv2.Polyline({
      path: path,
      strokeColor: "red",
      strokeWeight: 1,
      strokeOpacity: 1,
      strokeStyle: "dash",
      // fillColor: "#FD8989", // 다각형 내부 색상
      fillOpacity: 1,
      direction: true,
      directionOpacity: 0.4,
      zIndex: 1,
      map: this.map,
    });
    polyLine.setVisible(true);
    return polyLine;
  }

  addPolygon(coordinates: Array<Array<number>>) {
    const polygon = this.makePolygon(coordinates);
    this.polygonList.push(polygon);
  }

  makePolygon(polygons: Array<Array<number>>) {
    const paths = polygons.map((item: any) => {
      // const wgs84 = convertGrs80ToWgs84(item)
      // return new (window as any).Tmapv2.LatLng(wgs84[1], wgs84[0])
      return new (window as any).Tmapv2.LatLng(item[1], item[0]);
    });

    const polygon = new (window as any).Tmapv2.Polygon({
      paths,
      strokeColor: "#8C84EB",
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: "#8C84EB", // 다각형 내부 색상
      fillOpacity: 0.3,
      map: this.map,
    });
    polygon.setVisible(true);
    return polygon;
  }

  createHeatmap(info: any) {
    // data = {lat:~, lng:~ , value:~}[]
    const data = _.cloneDeep(info);
    const heat = new (window as any).Tmapv2.extension.HeatMap({
      map: this.map,
      radius: 50,
      data: {
        data: data,
        max: 10,
      },
    });
    this.heatMap = heat;
  }
  deleteHeatmap() {
    if (this.heatMap) {
      this.heatMap.destroy();
    }
  }
}

export default Map;
