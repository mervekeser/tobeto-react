import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import ProductService from "../services/productService";
export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

    useEffect(() => {
      let productService = new ProductService()
      productService.getByProductName(name).then(result=>setProduct(result.data.data))
    }, [])

  return (
    <div>
      
        <Card fluid>
          <CardContent>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <CardHeader>{product.productName}</CardHeader>
            <CardMeta>Friends of Elliot</CardMeta>
            <CardDescription>
              Steve wants to add you to the group <strong>best friends</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </CardContent>
        </Card>
      
    </div>
  );
}
