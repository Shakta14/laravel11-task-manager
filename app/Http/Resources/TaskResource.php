<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'deadline' => (new Carbon($this->deadline))->format('Y-m-d'),
            'status' => $this->status,
            'prority' => $this->priority,
            'image_path' => $this->image_path,
            'project' => new ProjectResource($this->project),
            'assignedUser' => $this->assignedUser ? new UserResource($this->assignedUser) : null,
            'created_by' => new UserResource($this->createdBy),
            'updated_by' => new UserResource($this->updatedBy),
        ];
    }
}