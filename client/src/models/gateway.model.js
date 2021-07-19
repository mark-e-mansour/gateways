module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            name: String,
            serialNumber: String,
            IPAddress: String,
            devices: Array
        },
        { timestamps: true }
    )

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id
        return object
    })
    
    const Gateway = mongoose.model(
        "gateway",
        schema
    )

    return Gateway;
}