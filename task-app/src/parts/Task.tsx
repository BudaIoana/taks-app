import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

export type TaskProps = {
  id?:number;
  title: string;
  description: string;
  createDate?: string;
  onEdit?:(e:any)=>void;
  onRemove?:(e:any)=>void;
};

export default function Task({ title, description, createDate,onEdit,onRemove }: TaskProps) {
  return (
    <Card variant='outlined'sx={{mb:'8px',mt:'8px'}} >
      <CardHeader title={title} subheader={createDate}></CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onRemove}>Remove</Button>
      </CardActions>
    </Card>
  );
}
