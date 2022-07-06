import React from 'react'
import {Card, CardGroup, Carousel} from 'react-bootstrap';

function CardTitle() {
  return (
<div>
<p>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="gam3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>SMK NU DARUSSALAM</h3>
      <p>SUMBERAGUNG - REJOAGUNG - BANYUWANGI</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="gam2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="gam1.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</p>
<p>
<CardGroup Card style={{ width: '84rem' }}>
  <Card>
    <Card.Img variant="top" src="guru1.JPG" />
    <Card.Body>
      <Card.Title>MOCH. SYAIFUDDIN SUBAKI S.P</Card.Title>
      <Card.Text>
        <div>
          <p>TTL = Banyuwangi, 20 April 1990</p>
          <p>Alamat = Parijatahwetan RT/RW : 02/01 - Sukomaju - Srono </p>
          <p>Email = pudin@gmail.com</p>
          <p>Agama = Islam</p>
          <p>Riwayat Pendidikan = Universitas 17 Agustus</p>
        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="guru2.JPG" />
    <Card.Body>
      <Card.Title>SUSANTI S.Pd</Card.Title>
      <Card.Text>
      <div>
          <p>TTL = Banyuwangi, 11 Mei 1987</p>
          <p>Alamat = Sumberagung RT/RW : 01/01 - Rejoagung - Srono </p>
          <p>Email = santi@gmail.com</p>
          <p>Agama = Islam</p>
          <p>Riwayat Pendidikan = Universitas Muhammadiyah Jember</p>
        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 4 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="siswa1.JPG" />
    <Card.Body>
      <Card.Title>BIMA AJI SAKSENA</Card.Title>
      <Card.Text>
      <div>
          <p>TTL = Banyuwangi, 24 Januari 2002</p>
          <p>Alamat = Krajan RT/RW : 04/04 - Bagorejo - Srono </p>
          <p>Email = bima@gmail.com</p>
          <p>Agama = Islam</p>
          <p>Riwayat Pendidikan = SMP Islam Alma'arif</p>
        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 6 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="siswa2.JPG" />
    <Card.Body>
      <Card.Title>SITI NURJANNAH</Card.Title>
      <Card.Text>
      <div>
          <p>TTL = Banyuwangi, 06 Mei 2003</p>
          <p>Alamat = Sumbergroto RT/RW : 02/01 - Rejoagung - Srono </p>
          <p>Email = siti@gmail.com</p>
          <p>Agama = Islam</p>
          <p>Riwayat Pendidikan = MTS Unggulan Darussalam</p>
        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 8 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</p>
</div>
  )
}

export default CardTitle