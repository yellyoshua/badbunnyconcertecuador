import Box from './Box';
import Title from './Title';
import store from '../store';

function EventLocation() {
  const { name, latitude, longitude, address_line_1 } = store(
    (state) => state.concertLocation!
  );

  return (
    <div>
      <Title content="Lugar del evento" />
      <div className="grid grid-cols-1 mb-4 gap-2 py-3">
        <Box value="País" label="Ecuador" />
        <Box value="Ciudad" label="Quito" />
        <Box value="Lugar" label={name} />
        <Box value="Dirección" label={address_line_1} />
        <Box value="Latitud" label={latitude} />
        <Box value="Longitud" label={longitude} />
      </div>
    </div>
  );
}

export default EventLocation;
