import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Link } from 'react-router-dom';
import mapMarkerImg from '../../images/map-marker.svg';

import { Container, SideBar, CreateOrphanage } from './styles';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

export interface IOrphanagesProps {
  id: string;
  name: string;
  email: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanagesProps[]>([]);
  useEffect(() => {
    async function loadOrphanages() {
      const response = await api.get<IOrphanagesProps[]>('orphanages');
      setOrphanages(response.data);
    }

    loadOrphanages();
  }, []);
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </footer>
      </SideBar>

      <Map
        center={[-23.3245219, -51.1689972]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
