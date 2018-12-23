import student from './model'

const AllStudents = (res) => {
    student.find((err, studnets) => {
        if(err)
            res.send(err);
        else
            res.send(studnets);
    })
}

export const create = (req, res) => {
    student.create(req.body, (err, result) => {
        if(err)
            res.send(err);
        else
            AllStudents(res);
    })
}

export const show = (req, res) => {
    student.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

export const index = (req, res) =>
    AllStudents(res);

export const searchStudent = (req, res) => {
    student.find({ name: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
    student.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
        AllStudents(res);
    }
  })
}

export const destroy = (req, res) =>{
    student.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
        res.send(err);
        }
        else {
            AllStudents(res);
        }
    }); 
}